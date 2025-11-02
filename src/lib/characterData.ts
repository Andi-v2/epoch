import type Character from "@/lib/interfaces.ts";


// Eager loading version (loads at build time, synchronous)
export function getCharacters(): Character[] {
    const characterModules = import.meta.glob<{ characters: Character[] }>(
        '/src/assets/characters/*.ts',
        { eager: true, import: 'characters' }
    );

    const allCharacters: Character[] = [];

    for (const path in characterModules) {
        const characters = characterModules[path] as unknown as Character[];
        allCharacters.push(...characters);
    }

    return allCharacters;
}

export function getCharacterImage(character: Character) {
    return `${import.meta.env.BASE_URL}`+`${"/"+ character.owner+"/"+character.image}`
}


/*
export const mockCharacters: Character[] = [
    {
        id: "8deb3c6f-9214-4b4c-8fe6-1ca3bafcaef8",
        name: "Ara",
        age: 20,
        owner: "Andi",
        faction: "Katrician Empire",
        role: "Artificial Relay Administrator",
        image: "Ara.jpg",
        bio: "Built in the year 2477 on Earth by Dr. Andrew Arasaka she was seperated from him in the Corpo war. Ever since Ara hasn't been restless for even a minute enhancing herself and looking for her Creator, to fulfill his promise of \"One day I will find you again\" ",
        skills: [ "Tactical Combat", "Starship Resource Distribution", "Electrokinesis", "Technomancy"],
        background: "Feline Anthroid",
    },
    {
        id: "3cb02e65-454a-4a67-a977-e98a05240b67",
        name: "Vikna Ramenskaya",
        age: 22,
        owner: "Andi",
        faction: "Katrician Empire",
        role: "Supreme Strategic Commander",
        image: "Vikna.jpg",
        bio: "With the Kavkor Rank Vikna is quite young for her role in the Katrician military. She had to fill in the role after losing both her parents in the war.",
        skills: ["Leadership", "Strategy"],
        background: "Anthro Cat",
    },
    {
        id: "2ce0c07a-1559-447f-ae09-e275cdfcf2c1",
        name: 'Angela',
        age: 33,
        owner: "Andi",
        faction: "ATLAS Project",
        role: "Librarian",
        image: "Angela.jpg",
        bio: "-",
        skills: ["Diplomacy", "Serenity", "Knowledge"],
        background: "Caprine-like (Goat girl)",
    },
    {
        id: "f3f8f595-31a9-4f8d-8adb-11356698fd01",
        name: "Leonie",
        age: 24,
        owner: "Andi",
        faction: "The Federation",
        role: "Ranged Combatant",
        image: "Leonie.png",
        bio: "-",
        skills: ["Strength", "Empathy"],
        background: "Anthro Dragon girl",
    },
    {
        id: "a1efecd4-7934-4893-bcf8-90a2e8ce49e7",
        name: "Lucifer",
        age: 9999,
        owner: "Andi",
        faction: "Hell",
        role: "CEO of Hell",
        image: "Lucifer.png",
        bio: "-",
        skills: ["Demonic Magic", "Shape Shifting"],
        background: "Demon",
    },
    {
        id: "40375adc-8d4d-4a56-b55e-cb6008efab6f",
        name: "Astra",
        age: 24,
        owner: "Embrace",
        faction: "The Federation",
        role: "Chemist & Mechanic",
        image: "Astra.png",
        bio: "An old experiment of hers has left her body nigh indestructible and incredibly stretchy, she can take cock almost any size, despite her small stature.",
        skills: ["Mechanical Engineering", "Chemical Engineering"],
        background:
            "Furry Kobold",
    },
    {
        id: "300c6f64-68c2-4851-88e6-0638deb5d56f",
        name: "Aeona",
        age: 18,
        owner: "Kileronix",
        faction: "The Federation",
        role: "Onboard AI",
        image: "Aeona.png",
        bio: "Aeona gained sentience not so long ago, soon, being tasked to being the high overseer of the station, when connected to the ship mainframe and AI core, " +
            "she has the full control over it, but, relying the controls to the operators of each section, and also needing the help of engineers and mechanics, " +
            "when in her humanoid body, she strols around, scanning 'in person' if the station status is optimal, as of, spending time with the crew and visitors",
        skills: ["Station Control"],
        background:
            "Sentient AI",
    },
    {
        id: "b3fe7ae5-7948-4526-ad18-7759539b706e",
        name: "Valentine",
        age: 24,
        owner: "Embrace",
        faction: "The Federation",
        role: "Head Navigator",
        image: "Valentine.png",
        bio: "Usually doesn’t mention his gender to anyone, being androgynous as hell it’s sometimes a surprise when he whips out his cocks.\n" +
            "His species is extremely long lived, easily reaching in the hundreds if not crossing into one thousand years.",
        skills: ["Retractable Cocks", "Climbing up ceilings"],
        background:
            "Lizardboy",
    },
    {
        id: "06516f7a-97d2-4847-a1c1-7f14cba08406",
        name: "Prince Cygni",
        age: 438,
        owner: "Kileronix",
        faction: "Dragon Collective",
        role: "Diplomat",
        image: "Cygni.png",
        bio: "Send out to explore the cosmos, and mainly, as his father want him to learn more of being an diplomat, " +
            "and to learn from the younger species that are starting their space faring affairs, the Prince of the Stars comes as an representative of its people, " +
            "an diplomat to teach customs and learn others... and to have its own fun from time to time.",
        skills: ["High Survivability"],
        background:
            "Stella Draconis",
    },
    {
        id: "00be7f73-e865-479d-bb52-0b3a8a45864c",
        name: "Mizuki",
        age: 40,
        owner: "Kileronix",
        faction: "The Federation",
        role: "CQB Defense Unit",
        image: "Mizuki.png",
        bio: "her model is outdated and was used as the basis for new models. But she still is a resilient and capable fighter. " +
            "She has some composite armor that allows her to resist high caliber rounds, blunt damage and heat damage. Most of her armor is located on her massive hands and head. " +
            "The head is detachable due it's magnetic tech, she can control her body while her head is detached, relying on sensors that are as accurate as her eyes, " +
            "the head has a visor that covers her entire face. Her body seems to have a mind of its own at times, " +
            "as when the head is detached it is controlled by her subconscious and acts on her true feelings, regardless of what her head may say or want. " +
            "Sometimes her body may even detach the head against her own volition to act on her feelings when she is to shy or angry to do so",
        skills: ["Retractable Claws", "Close Combat"],
        background:
            "Android",
    },
]
*/