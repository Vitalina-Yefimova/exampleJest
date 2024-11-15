const { ageClassification, weekFn } = require('./main.js')

// 2. Тестування функції `ageClassification(num)`:** Ваше завдання полягає у написанні тестів для функції `ageClassification(num)`, яка класифікує вік людини. 
// Тест повинен перевірити коректність роботи функції для всіх вказаних у прикладі діапазонів віку.

describe('Testing the ageClassification function for various age ranges', () => {

  test('age -1 returns null', () => {
    expect(ageClassification(-1)).toBeNull()
  })

  test('age 0 returns null', () => {
    expect(ageClassification(0)).toBeNull()
  })

  test('age 1 returns Дитинство', () => {
    expect(ageClassification(1)).toBe('Дитинство')
  })

  test('age 24 returns Дитинство', () => {
    expect(ageClassification(24)).toBe('Дитинство')
  })

  test('age 24.01 returns Молодість', () => {
    expect(ageClassification(24.01)).toBe('Молодість')
  })

  test('age 44 returns Молодість', () => {
    expect(ageClassification(44)).toBe('Молодість')
  })

  test('age 44.01 returns Зрілість', () => {
    expect(ageClassification(44.01)).toBe('Зрілість')
  })

  test('age 65 returns Зрілість', () => {
    expect(ageClassification(65)).toBe('Зрілість')
  })

  test('age 65.1 returns Старість', () => {
    expect(ageClassification(65.1)).toBe('Старість')
  })

  test('age 75 returns Старість', () => {
    expect(ageClassification(75)).toBe('Старість')
  })

  test('age 75.01 returns Довголіття', () => {
    expect(ageClassification(75.01)).toBe('Довголіття')
  })

  test('age 90 returns Довголіття', () => {
    expect(ageClassification(90)).toBe('Довголіття')
  })

  test('age 90.01 returns Рекорд', () => {
    expect(ageClassification(90.01)).toBe('Рекорд')
  })

  test('age 122 returns Рекорд', () => {
    expect(ageClassification(122)).toBe('Рекорд')
  })

  test('age 122.01 returns null', () => {
    expect(ageClassification(122.01)).toBeNull()
  })

  test('age 150 returns null', () => {
    expect(ageClassification(150)).toBeNull()
  })
})

// или так

describe('Testing the ageClassification function for various age ranges', () => {
  test.each([
    [-1, null],
    [0, null],
    [1, 'Дитинство'],
    [24, 'Дитинство'],
    [24.01, 'Молодість'],
    [44, 'Молодість'],
    [44.01, 'Зрілість'],
    [65, 'Зрілість'],
    [65.1, 'Старість'],
    [75, 'Старість'],
    [75.01, 'Довголіття'],
    [90, 'Довголіття'],
    [90.01, 'Рекорд'],
    [122, 'Рекорд'],
    [122.01, null],
    [150, null]
  ])
    ('age %p returns %p', (age, expected) => {
      expect(ageClassification(age)).toBe(expected)
    })
})

// 3. Тестування функції weekFn(cond): Напишіть тести для функції weekFn(cond), що повертає назву дня тижня за заданим числом. 
// Тест повинен переконатися, що функція коректно повертає назви для чисел від 1 до 7, та повертає null для невідповідних значень (наприклад, 9, 1.5, '2').

describe('Testing the weekFn function for different week day values', () => {

  test('weekFn(1) returns Понеділок', () => {
    expect(weekFn(1)).toBe('Понеділок')
  })

  test('weekFn(2) returns Вівторок', () => {
    expect(weekFn(2)).toBe('Вівторок')
  })

  test('weekFn(3) returns Середа', () => {
    expect(weekFn(3)).toBe('Середа')
  })

  test('weekFn(4) returns Четвер', () => {
    expect(weekFn(4)).toBe('Четвер')
  })

  test('weekFn(5) returns П\'ятниця', () => {
    expect(weekFn(5)).toBe('П\'ятниця')
  })

  test('weekFn(6) returns Субота', () => {
    expect(weekFn(6)).toBe('Субота')
  })

  test('weekFn(7) returns Неділя', () => {
    expect(weekFn(7)).toBe('Неділя')
  })

  test('weekFn(9) returns null', () => {
    expect(weekFn(9)).toBeNull()
  })

  test('weekFn(1.5) returns null', () => {
    expect(weekFn(1.5)).toBeNull()
  })

  test('weekFn("2") returns null', () => {
    expect(weekFn("2")).toBeNull()
  })
})

// или так

describe('Testing the weekFn function for different week day values', () => {
  test.each([
    [1, 'Понеділок'],
    [2, 'Вівторок'],
    [3, 'Середа'],
    [4, 'Четвер'],
    [5, 'П\'ятниця'],
    [6, 'Субота'],
    [7, 'Неділя'],
    [9, null],
    [1.5, null],
    ['2', null]
  ])
    ('weekFn %p returns %p', (cond, expected) => {
      expect(weekFn(cond)).toBe(expected)
    })
})