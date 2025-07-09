//Guess a number from 1 to 10

const lunky= Math.floor(Math.random()*10)+1;
process.stdout.write("Guess a number from 1 to 10");
process.stdin.on(
  'data',data =>{
    let guess = data;
    process.stdout.write(`your guess was ${guess}\n`);
    if( guess == lunky)
    {process.stdout.write(`correct you guessed as ${lunky}`);
     process.exit();
    }
    else
    {process.stdout.write(`Wrong guess ${guess}`);
    }
    }
    )
 // sample input and output
//Guesss a number from 1 to 10
//2
//your guess was 2
//correct you guessed as 2

   


