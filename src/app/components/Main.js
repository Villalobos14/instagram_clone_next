"use client"
import { useRouter } from "next/navigation";
import "../styles/Main.css";
import MenuIzquierdo from "@/app/components/MenuIzquierdo";
import MenuCentral from "@/app/components/MenuCentral";
import MenuDerecho from "@/app/components/MenuDerecho";

export default function Home() {
    const navigate = useRouter();


    return (
        <main className="container-main">

            <section className="section-left">
                <MenuIzquierdo/>
            </section>

            <div className="divisora"></div>


            <section className="section-center">
                <MenuCentral/>
            </section>


        </main>
    );
}
