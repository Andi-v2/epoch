import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.tsx"

export function OverviewTab() {
    return (
        <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
                <h2 className="text-4xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                    Welcome to The Epoch
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    A sci-fi ERP universe, where you explore the facilities of your new home, explore space, and of course, explore each other
                </p>
            </div>

            <div className="justify-center items-center flex ">
                <img className="rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-[1.02]" src={`${import.meta.env.BASE_URL}/Station.png`}/>
            </div>

            {/* Lore Cards */}
            <div className="grid md:grid-cols-2 gap-6">
                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] py-6">
                    <CardHeader>
                        <CardTitle className="text-primary ">The Setting</CardTitle>
                        <CardDescription>Year 2497 - The Epoch Space Station</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <p className="text-sm leading-relaxed">
                            You are a crewmember aboard Epoch Station, floating somewhere in the vastness of space.
                            Technology has advanced to the point where commercial travel between galaxies is now affordable,
                            and control over vast sectors of the galaxy is more important than ever.
                        </p>
                        <p className="text-sm leading-relaxed text-muted-foreground">
                            Many Factions have tried to be the first in an arms race to expand their reach, but the
                            but only a few have managed to succeed beyond one or two star systems.
                        </p>
                    </CardContent>
                </Card>

                <Card className="transition-all duration-300 hover:shadow-lg hover:scale-[1.02] py-6">
                    <CardHeader>
                        <CardTitle className="text-accent">The Factions</CardTitle>
                        <CardDescription>Powers that shape the galaxy</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-3">
                            <div>
                                <h4 className="font-semibold text-primary">The United Federation Of interstellar Peace
                                    and Development</h4>
                                <p className="text-sm text-muted-foreground">
                                    Independent galactic faction promoting peace, research, and development through
                                    advanced technology
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-accent">The Union of Sol</h4>
                                <p className="text-sm text-muted-foreground">
                                    A Powerful human megacorporation turned empire, expanding aggressively for profit,
                                    control, and dominance across the stars.
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold text-chart-3">The ATLAS Project</h4>
                                <p className="text-sm text-muted-foreground">
                                    A neutral organization dedicated to archiving and distributing knowledge about the
                                    galaxy.
                                </p>
                                <p className="text-sm text-muted-foreground">Working Closely together with The
                                    Federation
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="md:col-span-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.01] py-6">
                    <CardHeader>
                        <CardTitle className="text-chart-4">Current Events</CardTitle>
                        <CardDescription>What's happening in the galaxy</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="grid md:grid-cols-3 gap-4">

                            <div className="space-y-2">
                                <h4 className="font-semibold text-primary">Planet DR-1-3-15 Expedition</h4>
                                <p className="text-sm text-muted-foreground">
                                    A crew has been sent to the planet out to investigate the mysteries of it's lifelessness.
                                </p>
                            </div>
                            {/*<div className="space-y-2">*/}
                            {/*    <h4 className="font-semibold text-accent">Trade War Escalation</h4>*/}
                            {/*    <p className="text-sm text-muted-foreground">*/}
                            {/*        Tensions between the Alliance and independent colonies have reached a breaking*/}
                            {/*        point.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                            {/*<div className="space-y-2">*/}
                            {/*    <h4 className="font-semibold text-chart-3">AI Uprising Rumors</h4>*/}
                            {/*    <p className="text-sm text-muted-foreground">*/}
                            {/*        Reports of rogue AI systems in the outer rim have sparked fear and investigation.*/}
                            {/*    </p>*/}
                            {/*</div>*/}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
