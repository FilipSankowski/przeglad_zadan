import ExerciseLink from "./ExerciseLink";

export default function ExerciseList() {
  return (
    <div className="w-full h-full flex flex-col flex-nowrap">
      <ExerciseLink href="/exercise/1">Zadanie 1</ExerciseLink>
      <ExerciseLink href="/exercise/2">Zadanie 2</ExerciseLink>
    </div>
  )
}