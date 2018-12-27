// Count to 10
// 10-1, 1-10

const trainingData = [   
    [1,2,3,4,5,6,7,8,9,10],
    [10,9,8,7,6,5,4,3,2,1]
];

const net = new brain.recurrent.LSTMTimeStep();

net.train(trainingData);

/*
console.log(net.run([3,4,5,6])); //7
console.log(net.run([8,7,6,5])); //4
console.log(net.run([2,3,4])); //5
*/