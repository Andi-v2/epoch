import { useState, useMemo } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search } from "lucide-react"
import { CharacterCard } from "@/components/character-card"
import { CharacterOverlay } from "@/components/character-overlay"
import {getCharacters} from "@/lib/characterData.ts";
import type Character from "@/lib/interfaces.ts";

// Mock character data - in a real app this would come from a database


export function GalleryTab() {
    const [selectedCharacter, setSelectedCharacter] = useState<(Character[])[0] | null>(null)
    const [searchTerm, setSearchTerm] = useState("")
    const [sortBy, setSortBy] = useState<"name" | "owner">("name")

    const filteredAndSortedCharacters = useMemo(() => {
        const filtered = getCharacters().filter((character) =>
            character.name.toLowerCase().includes(searchTerm.toLowerCase()),
        )

        if (sortBy === "name") {
            filtered.sort((a, b) => a.name.localeCompare(b.name))
        } else if (sortBy === "owner") {
            filtered.sort((a, b) => a.owner.localeCompare(b.owner))
        }

        return filtered
    }, [searchTerm, sortBy])

    const groupedCharacters = useMemo(() => {
        if (sortBy !== "owner") {
            return { ungrouped: filteredAndSortedCharacters }
        }

        const groups: Record<string, Character[]> = {}
        filteredAndSortedCharacters.forEach((character) => {
            if (!groups[character.owner]) {
                groups[character.owner] = []
            }
            groups[character.owner].push(character)
        })

        return groups
    }, [filteredAndSortedCharacters, sortBy])

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-center">
                <div className="relative flex-1 w-full sm:max-w-md">
                    <Input
                        placeholder="Search characters..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-colors"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                </div>

                <Select value={sortBy} onValueChange={(value: "name" | "owner") => setSortBy(value)}>
                    <SelectTrigger className="w-full sm:w-48 bg-card/50 backdrop-blur-sm border-border/50">
                        <SelectValue placeholder="Sort by..." />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="name">Alphabetical (Name)</SelectItem>
                        <SelectItem value="owner">Group by Owner</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {sortBy === "owner" ? (
                <div className="space-y-8">
                    {Object.entries(groupedCharacters).map(([owner, characters]) => (
                        <div key={owner} className="relative">
                            <div className="border-2 border-accent/30 rounded-lg p-6 bg-card/20 backdrop-blur-sm">
                                <h3 className="text-lg font-semibold text-accent mb-4 absolute -top-3 left-4 bg-background px-2">
                                    {owner}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 mt-4">
                                    {characters.map((character) => (
                                        <CharacterCard
                                            key={character.id}
                                            character={character}
                                            onClick={() => setSelectedCharacter(character)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
                    {filteredAndSortedCharacters.map((character) => (
                        <CharacterCard key={character.id} character={character} onClick={() => setSelectedCharacter(character)} />
                    ))}
                </div>
            )}

            {filteredAndSortedCharacters.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No characters found matching your search.</p>
                </div>
            )}

            {/* Character Detail Overlay */}
            {selectedCharacter && (
                <CharacterOverlay character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
            )}
        </div>
    )
}
