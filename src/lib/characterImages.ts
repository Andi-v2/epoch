import type Character from "@/lib/interfaces.ts";

export const getCharacterImage = (character: Character) => {
    const foundObject = mockCharacters.find(obj => obj.id === character.id);
    if (foundObject) {
        return foundObject.image;
    } else {
        return null;
    }
}


export const mockCharacters: Character[] = [
    {
        id: "1",
        name: "Ara",
        age: 20,
        owner: "Andi",
        faction: "Katrician Empire",
        role: "Artificial Relay Administrator",
        image: "/Ara.jpg",
        bio: "Built in the year 2477 on Earth by Dr. Andrew Arasaka she was seperated from him in the Corpo war. Ever since Ara hasn't been restless for even a minute enhancing herself and looking for her Creator, to fulfill his promise of \"One day I will find you again\" ",
        skills: [ "Tactical Combat", "Starship Resource Distribution", "Electrokinesis", "Technomancy"],
        background: "Feline Anthroid.",
    },
    {
        id: "2",
        name: "Vikna Ramenskaya",
        age: 22,
        owner: "Andi",
        faction: "Katrician Empire",
        role: "Supreme Strategic Commander",
        image: "/Vikna.jpg",
        bio: "With the Kavkor Rank Vikna is quite young for her role in the Katrician military. She had to fill in the role after losing both her parents in the war.",
        skills: ["Leadership", "Strategy"],
        background: "Anthro Cat",
    },
    {
        id: "3",
        name: 'Angela',
        age: 33,
        owner: "Andi",
        faction: "ATLAS Project",
        role: "Librarian",
        image: "/Angela.jpg",
        bio: "-",
        skills: ["Diplomacy", "Serenity", "Knowledge"],
        background: "Caprine-like (Goat girl)",
    },
    {
        id: "4",
        name: "Leonie",
        age: 24,
        owner: "Andi",
        faction: "The Federation",
        role: "Ranged Combatant",
        image: "/Leonie.png",
        bio: "-",
        skills: ["Strength", "Empathy"],
        background: "Anthro Dragon girl",
    },
    {
        id: "5",
        name: "Lucifer",
        age: 9999,
        owner: "Andi",
        faction: "Hell",
        role: "CEO of Hell",
        image: "/Lucifer.png",
        bio: "-",
        skills: ["Demonic Magic", "Shape Shifting"],
        background: "Demon",
    },
    {
        id: "6",
        name: "Astra",
        age: 24,
        owner: "Embrace",
        faction: "The Federation",
        role: "Chemist & Mechanic",
        image: "/Astra.png",
        bio: "An old experiment of hers has left her body nigh indestructible and incredibly stretchy, she can take cock almost any size, despite her small stature.",
        skills: ["Mechanical Engineering", "Chemical Engineering"],
        background:
            "Furry Kobold",
    },
    {
        id: "7",
        name: "Aeona",
        age: 18,
        owner: "Kileronix",
        faction: "The Federation",
        role: "Onboard AI",
        image: "/Aeona.png",
        bio: "Aeona gained sentience not so long ago, soon, being tasked to being the high overseer of the station, when connected to the ship mainframe and AI core, " +
            "she has the full control over it, but, relying the controls to the operators of each section, and also needing the help of engineers and mechanics, " +
            "when in her humanoid body, she strols around, scanning 'in person' if the station status is optimal, as of, spending time with the crew and visitors",
        skills: ["Station Control"],
        background:
            "Sentient AI",
    },
    {
        id: "8",
        name: "Valentine",
        age: 24,
        owner: "Embrace",
        faction: "The Federation",
        role: "Head Navigator",
        image: "/Valentine.png",
        bio: "Usually doesn’t mention his gender to anyone, being androgynous as hell it’s sometimes a surprise when he whips out his cocks.\n" +
            "His species is extremely long lived, easily reaching in the hundreds if not crossing into one thousand years.",
        skills: ["Retractable Cocks", ""],
        background:
            "Lizardboy",
    },
    {
        id: "9",
        name: "Prince Cygni",
        age: 438,
        owner: "Kileronix",
        faction: "Dragon Collective",
        role: "Diplomat",
        image: "/Cygni.png",
        bio: "Send out to explore the cosmos, and mainly, as his father want him to learn more of being an diplomat, " +
            "and to learn from the younger species that are starting their space faring affairs, the Prince of the Stars comes as an representative of its people, " +
            "an diplomat to teach customs and learn others... and to have its own fun from time to time.",
        skills: ["High Survivability"],
        background:
            "Stella Draconis",
    },
    {
        id: "10",
        name: "Mizuki",
        age: 40,
        owner: "Kileronix",
        faction: "The Federation",
        role: "CQB Defense Unit",
        image: "/Mizuki.png",
        bio: "her model is outdated and was used as the basis for new models. But she still is a resilient and capable fighter. " +
            "She has some composite armor that allows her to resist high caliber rounds, blunt damage and heat damage. Most of her armor is located on her massive hands and head. " +
            "The head is detachable due it's magnetic tech, she can control her body while her head is detached, relying on sensors that are as accurate as her eyes, " +
            "the head has a visor that covers her entire face. Her body seems to have a mind of its own at times, " +
            "as when the head is detached it is controlled by her subconscious and acts on her true feelings, regardless of what her head may say or want. " +
            "Sometimes her body may even detach the head against her own volition to act on her feelings when she is to shy or angry to do so",
        skills: ["Retractable Cocks", ""],
        background:
            "Android",
    },
]