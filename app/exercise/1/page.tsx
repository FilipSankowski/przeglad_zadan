'use client'

import InputLabeled from "@/components/InpuLabeled";
import { useState } from "react";

export default function ExerciseOne() {
    const [countries, setCountries] = useState({});

    const getCountries = () => {
        if (Object.keys(countries).length == 0) {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(res => setCountries(res))
            .catch(res => console.warn('Zapytanie zawiodło'))
        }
    }

    getCountries();

    return (
        <div className="flex flex-column flex-wrap gap-6 p-5 text-black">
            <div className="w-full font-bold text-2xl pb-2 border-b-2 border-black">
                <span>
                    Treść polecenia
                </span>
            </div>
            <div className="flex flex-colum flex-wrap gap-3">
                Zadanie 1 <br />
                <InputLabeled
                type="text"
                name="answer"
                >
                    Zadanie 1
                </InputLabeled>
            </div>
        </div>
    )
}