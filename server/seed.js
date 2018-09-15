const db = require('./models')
const Employee = require('./models/employees')

async function seed() {
  await db.sync({force: true})
  console.log('Database synced!')

  const employees = await Promise.all([
  		Employee.create({
  			gender: 'male',
  			age: 26,
  			race: 'Latinx',
  			military: true,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 49,
  			race: 'White',
  			military: false,
  			disability: true,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'other',
  			age: 19,
  			race: 'American Indian',
  			military: false,
  			disability: false,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 52,
  			race: 'Asian',
  			military: true,
  			disability: true,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 34,
  			race: 'Black',
  			military: false,
  			disability: false,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 38,
  			race: 'Latinx',
  			military: false,
  			disability: true,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'other',
  			age: 29,
  			race: 'White',
  			military: false,
  			disability: false,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 27,
  			race: 'Asian',
  			military: true,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 31,
  			race: 'Black',
  			military: false,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 40,
  			race: 'Latinx',
  			military: false,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'other',
  			age: 22,
  			race: 'Latinx',
  			military: false,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 55,
  			race: 'Asian',
  			military: false,
  			disability: false,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 50,
  			race: 'White',
  			military: true,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 44,
  			race: 'White',
  			military: false,
  			disability: true,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 37,
  			race: 'Latinx',
  			military: false,
  			disability: true,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'other',
  			age: 30,
  			race: 'White',
  			military: false,
  			disability: true,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 61,
  			race: 'American Indian',
  			military: false,
  			disability: false,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 25,
  			race: 'Black',
  			military: false,
  			disability: true,
  			lgbt: false
  		}),
  		Employee.create({
  			gender: 'female',
  			age: 45,
  			race: 'Asian',
  			military: false,
  			disability: false,
  			lgbt: true
  		}),
  		Employee.create({
  			gender: 'male',
  			age: 33,
  			race: 'Black',
  			military: true,
  			disability: false,
  			lgbt: false
  		})
  	])
}

 const runSeed = async () => {
  console.log('seeding..')
  try {
    await seed()
  } catch (err) {
    console.log(err.message)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed