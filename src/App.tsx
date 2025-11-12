import {useEffect, useState} from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button.tsx"
import { Moon, Sun } from "lucide-react"
import { OverviewTab } from "@/components/overview-tab.tsx"
import { GalleryTab } from "@/components/gallery-tab.tsx"
import {CreatorTab} from "@/components/creator-tab.tsx";


export default function EpochHub() {
    const [isDarkMode, setIsDarkMode] = useState(true)

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode)
        document.documentElement.classList.toggle("dark")
    }

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [isDarkMode])

    return (
        <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? "dark" : ""}`}>
            <div className="min-h-screen flex flex-col bg-background text-foreground">
                {/* Header */}
                <header className="border-b border-border bg-card/50 backdrop-blur-sm">
                    <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                                The Epoch
                            </h1>
                            <span className="text-sm text-muted-foreground">Roleplay Info Hub</span>
                        </div>

                        <Button
                            variant="outline"
                            size="icon"
                            onClick={toggleTheme}
                            className="transition-all duration-200 bg-transparent text-foreground hover:text-primary"
                        >
                            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
                        </Button>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 container mx-auto px-4 py-8">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger value="overview" className="transition-all duration-200">
                                Overview & Lore
                            </TabsTrigger>
                            <TabsTrigger value="characters" className="transition-all duration-200">
                                Character Gallery
                            </TabsTrigger>
                            <TabsTrigger value="creator" className="transition-all duration-200">
                                Create Character
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="overview" className="space-y-6 bg-background">
                            <OverviewTab />
                        </TabsContent>

                        <TabsContent value="characters" className="space-y-6">
                            <GalleryTab />
                        </TabsContent>

                        <TabsContent value="creator" className="space-y-6">
                            <CreatorTab/>
                        </TabsContent>
                    </Tabs>
                </main>
            </div>
        </div>
    )
}