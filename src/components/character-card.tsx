import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import type Character from "@/lib/interfaces.ts";
import {getCharacterImage} from "@/lib/characterData.ts";

interface CharacterCardProps {
    character: Character
    onClick: () => void
}

export function CharacterCard({ character, onClick }: CharacterCardProps) {
    const [isHovered, setIsHovered] = useState(false)


    return (
        <Card
            className="group cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden bg-card/80 backdrop-blur-sm border-border/50"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={onClick}
        >
            <CardContent className="p-0 relative">
                <div className="aspect-[3/4] relative overflow-hidden">
                    <img
                        src={getCharacterImage(character)}
                        alt={character.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Hover Overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${
                            isHovered ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
                            <h3 className="font-bold text-lg text-foreground">{character.name}</h3>
                            <div className="space-y-1">
                                <p className="text-sm text-muted-foreground">Age: {character.age}</p>
                                <p className="text-sm text-accent font-medium">{character.role}</p>
                                <p className="text-xs text-primary">{character.faction}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
