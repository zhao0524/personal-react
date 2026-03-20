import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return <fotter className = "py-12 px-4 liquid-glass relative border-t border-white/10 mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className = "text-sm text-muted-foreground "> &copy;{new Date().getFullYear()} David.zhao.All rights reserved</p>
        <a href = "#hero" className = "p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
            <ArrowUp size = {20}/>
        </a>
    </fotter>
}