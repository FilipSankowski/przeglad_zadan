'use client'

import InputLabeled from "@/components/InpuLabeled";
import { useEffect, useState } from "react";

export default function ExerciseOne() {
    const [countries, setCountries] = useState([]);
    const [answer, setAnswer] = useState('');

    useEffect(() => {
        if (Object.keys(countries).length == 0) {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(res => setCountries(res))
            .catch(res => console.warn('Zapytanie zawiodło'))
        }
    }, []);

    return (
        <div className="flex flex-column flex-wrap gap-5 p-5 text-black">
            <div className="w-full font-bold text-2xl pb-2 border-b-2 border-black">
                <span>
                    Wprowadź liczbę, aby wyświetlić państwa których nazwa składa się z minimum tylu liter
                </span>
            </div>
            <div className="w-full flex gap-3 text-center items-center">
                <div className="self-center">
                    <InputLabeled
                    type="text"
                    name="answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full"
                    />
                </div>
            </div>
            <div className="w-full font-bold text-2xl pb-2 border-b-2 border-black">
                <span>
                    Wynik:
                </span>
            </div>
            <ul className="columns-3">
                {
                    ((answer as unknown) as number) 
                    ?
                    countries
                        .filter((country) => country.name.common.length >= answer)
                        .map((country, index) => <li key={index}>{country.name.common}</li>)
                    :
                    <></>
                }
            </ul>
        </div>
    )
}