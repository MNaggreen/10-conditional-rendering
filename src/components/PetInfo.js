function PetInfo(props) {
  const { animal, age, hasPet } = props
  // проводим деструктуризацию чтобы для переменных выше

  return hasPet ? (
    <h1>{`My ${animal} is ${age} years old`} </h1>
  ) : (
    <h2>I don't have an animal</h2>
  )
}
// тут мы используем тернарный оператор вместе скодом jsx скобки нужны для пробелов
// фигурные скобки там мы держим на java script код

export default PetInfo
// тут мы принимаем это свойство и вставляем в h1
