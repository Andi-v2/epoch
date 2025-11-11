import {useState} from "react"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Label} from "@/components/ui/label"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx"
import {Copy, Check, Plus, X, ChevronsUpDown} from "lucide-react"

import {Popover, PopoverContent, PopoverTrigger} from "@/components/ui/popover.tsx";
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from "@/components/ui/command.tsx";
import {Owners} from "@/lib/characterData.ts";
import {cn} from "@/lib/utils.ts";
import {ScrollArea} from "@/components/ui/scroll-area.tsx";

export function CreatorTab() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [owner, setOwner] = useState("")
    const [ownerOpen, setOwnerOpen] = useState(false)
    const [faction, setFaction] = useState("The Federation")
    const [role, setRole] = useState("")
    const [bio, setBio] = useState("")
    const [species, setSpecies] = useState("")
    const [characteristics, setCharacteristics] = useState<string[]>([])
    const [currentCharacteristic, setCurrentCharacteristic] = useState("")
    const [generatedJson, setGeneratedJson] = useState("")
    const [copied, setCopied] = useState(false)

    const addCharacteristic = () => {
        if (currentCharacteristic.trim()) {
            setCharacteristics([...characteristics, currentCharacteristic.trim()])
            setCurrentCharacteristic("")
        }
    }

    const removeCharacteristic = (index: number) => {
        setCharacteristics(characteristics.filter((_, i) => i !== index))
    }

    const generateJson = () => {
        const characterData = {
            id: crypto.randomUUID(),
            name: name || "",
            age: age ? Number.parseInt(age) : 0,
            owner: owner || "",
            faction: faction || "",
            role: role || "",
            image: "",
            bio: bio || "",
            characteristics: characteristics,
            species: species || "",
        }

        const jsonString = JSON.stringify(characterData, null, 2)
        setGeneratedJson(jsonString)
        setCopied(false)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText(generatedJson)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <div className="grid gap-6 md:grid-cols-2">
            {/* Form Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border py-6">
                <CardHeader>
                    <CardTitle
                        className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Create Character
                    </CardTitle>
                    <CardDescription>Fill out the form to generate character data</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            placeholder="Character name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                            id="age"
                            type="number"
                            placeholder="Character age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="owner">Owner</Label>
                        <Popover open={ownerOpen} onOpenChange={setOwnerOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={ownerOpen}
                                    className="w-full justify-between bg-background/50 hover:text-primary "
                                >
                                    {owner || "Select owner..."}
                                    <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50"/>
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0">
                                <Command>
                                    <CommandInput placeholder="Search or type new owner..."/>

                                        <CommandList className="w-full">
                                            <CommandEmpty>No owner found</CommandEmpty>
                                            <CommandGroup>
                                                {Owners.map((ownerOption) => (
                                                    <CommandItem
                                                        key={ownerOption}
                                                        value={ownerOption}
                                                        onSelect={(currentValue) => {
                                                            setOwner(currentValue === owner ? "" : currentValue)
                                                            setOwnerOpen(false)
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn("mr-2 h-4 w-4", owner === ownerOption ? "opacity-100" : "opacity-0")}/>
                                                        {ownerOption}
                                                    </CommandItem>
                                                ))}
                                            </CommandGroup>
                                        </CommandList>

                                </Command>
                            </PopoverContent>
                        </Popover>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="faction">Faction</Label>
                        <Input
                            id="faction"
                            placeholder="Character faction"
                            value={faction}
                            onChange={(e) => setFaction(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="role">Role</Label>
                        <Input
                            id="role"
                            placeholder="Character role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="species">Species</Label>
                        <Input
                            id="species"
                            placeholder="Character species"
                            value={species}
                            onChange={(e) => setSpecies(e.target.value)}
                            className="bg-background/50"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="bio">Bio</Label>
                        <Textarea
                            id="bio"
                            placeholder="Character biography"
                            value={bio}
                            onChange={(e) => setBio(e.target.value)}
                            className="bg-background/50 min-h-[100px]"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="characteristics">Characteristics</Label>
                        <div className="flex gap-2">
                            <Input
                                id="characteristics"
                                placeholder="Add a characteristic"
                                value={currentCharacteristic}
                                onChange={(e) => setCurrentCharacteristic(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && addCharacteristic()}
                                className="bg-background/50"
                            />
                            <Button type="button" onClick={addCharacteristic} size="icon" variant="outline" className="bg-transparent hover:text-primary">
                                <Plus className="h-4 w-4"/>
                            </Button>
                        </div>
                        {characteristics.length > 0 && (
                            <div className="flex flex-wrap gap-2 mt-2">
                                {characteristics.map((char, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                                    >
                                        <span>{char}</span>
                                        <button
                                            onClick={() => removeCharacteristic(index)}
                                            className="hover:text-destructive transition-colors"
                                        >
                                            <X className="h-3 w-3"/>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <Button onClick={generateJson} className="w-full mt-4 font-bold text-lg" size="lg">
                        Generate
                    </Button>
                </CardContent>
            </Card>

            {/* JSON Output Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border py-6">
                <CardHeader>
                    <CardTitle
                        className="text-2xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        Generated Character Data
                    </CardTitle>
                    <CardDescription>Copy the generated character data</CardDescription>
                </CardHeader>
                <CardContent>
                    {generatedJson ? (
                        <div className="space-y-4">
                            <div className="relative">
                <pre className="bg-background/50 p-4 rounded-lg overflow-auto max-h-[500px] text-sm">
                  <code className="block whitespace-pre-wrap wrap-break-word">{generatedJson}</code>
                </pre>
                                <Button
                                    onClick={copyToClipboard}
                                    size="icon"
                                    variant="outline"
                                    className="absolute top-2 right-2 bg-transparent hover:text-primary "
                                >
                                    {copied ? <Check className="h-4 w-4"/> : <Copy className="h-4 w-4"/>}
                                </Button>
                            </div>
                        </div>
                    ) : (
                        <div className="flex items-center justify-center h-[500px] text-muted-foreground">
                            <p>Fill out the form and click Generate to see the output</p>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
