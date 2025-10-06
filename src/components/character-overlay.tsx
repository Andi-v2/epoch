"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getCharacterImage } from "@/lib/characterImages";
import type Character from "@/lib/interfaces.ts";


interface CharacterOverlayProps {
    character: Character
    onClose: () => void
}

export function CharacterOverlay({ character, onClose }: CharacterOverlayProps) {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 10)

        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                handleClose()
            }
        }

        document.addEventListener("keydown", handleEscape)
        document.body.style.overflow = "hidden"

        return () => {
            clearTimeout(timer)
            document.removeEventListener("keydown", handleEscape)
            document.body.style.overflow = "unset"
        }
    }, [])

    const handleClose = () => {
        setIsVisible(false)
        setTimeout(() => onClose(), 200)
    }

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Backdrop */}
            <div
                className={`absolute inset-0 bg-background/80 backdrop-blur-md transition-all duration-300 ${
                    isVisible ? "opacity-100" : "opacity-0"
                }`}
                onClick={handleClose}
            />

            {/* Content */}
            <div className="relative z-10 flex items-center justify-center w-full h-full p-4">
                <div
                    className={`flex items-center justify-center max-w-8xl w-full transition-all duration-500 ease-out ${
                        isVisible ? "scale-100 translate-y-0" : "scale-95 translate-y-4"
                    }`}
                >
                    {/* Character Image */}
                    <div
                        className={`relative w-136 h-164 mr-8 flex-shrink-0 transition-all duration-700 ease-out ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                        }`}
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}`+`${getCharacterImage(character) || "/placeholder.svg"}`}
                            alt={character.name}

                            className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-2xl"
                        />
                    </div>

                    {/* Character Information */}
                    <div
                        className={`flex-1 space-y-6 max-w-2xl transition-all duration-700 ease-out delay-100 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                        }`}
                    >
                        <div className="space-y-2">
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent py-1">
                                {character.name}
                            </h2>
                            <div className="flex items-center gap-4 text-muted-foreground">
                                <span>Age: {character.age}</span>
                                <span>•</span>
                                <span>Owner: {character.owner}</span>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Badge variant="secondary" className="text-sm">
                                {character.faction}
                            </Badge>
                            <Badge variant="outline" className="text-sm ml-2">
                                {character.role}
                            </Badge>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Biography</h3>
                                <p className="text-foreground leading-relaxed">{character.bio}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Race</h3>
                                <p className="text-muted-foreground leading-relaxed">{character.background}</p>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold text-primary mb-2">Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {character.skills.map((skill, index) => (
                                        <Badge key={index} variant="outline" className="text-xs">
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Close Button */}
                <Button
                    variant="outline"
                    size="icon"
                    className={`absolute top-4 right-4 bg-background/80 backdrop-blur-sm transition-all duration-500 ease-out delay-200 ${
                        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    onClick={handleClose}
                >
                    <X className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
