import Link from "next/link"
import { Calendar } from "lucide-react"

import { Button } from "@/app/components/ui/button"

export function CTA() {
    return (
        <section id="contact" className="py-20 md:py-32 border-t">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            מוכן לאוטומציה של ההצלחה שלך?
                        </h2>
                        <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                            קבע שיחת אפיון ללא עלות וגלה כמה זמן וכסף העסק שלך יכול לחסוך.
                        </p>
                    </div>
                    <div className="w-full max-w-sm space-y-2">
                        <Button size="lg" className="w-full" asChild>
                            <Link href="https://calendly.com/your-link" target="_blank">
                                <Calendar className="ml-2 h-4 w-4" />
                                תיאום שיחת אפיון
                            </Link>
                        </Button>
                        <p className="text-xs text-muted-foreground">
                            ללא התחייבות. שיחת היכרות קצרה של 15 דקות.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
