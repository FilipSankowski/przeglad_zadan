'use client'

import Exercise from "@/components/Exercise";
import ExerciseList from "@/components/ExerciseList";
import { useState } from "react";

export default function Home() {
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
    <div className="flex flex-row flex-nowrap grow">
      <div className="bg-gray-400 w-1/6">
        <ExerciseList />
      </div>
      <div className="bg-gray-300 w-5/6">
        <Exercise />
      </div>
    </div>
  )
}