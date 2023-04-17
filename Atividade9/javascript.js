var nums = new Array (3);
var i;
var maiornumero = 0;

for(i=0; i<nums.length; i++){
    nums[i] = parseFloat (prompt("Digite o número: "));
}

function maiorNum(nums){
    for(i=0; i<nums.length; i++)
        if(nums[i] > maiornumero)
            maiornumero = nums[i];
    return maiornumero; 
  
}

function sortfunction(a, b){
    return (a - b) //faz com que o array seja ordenado numericamente e de ordem crescente.
  }

function ordenCresc (nums){
    return nums.sort(sortfunction);
}

alert("O maior número entre: " + nums[0] + ", " + nums[1] + ", " + nums[2] + " é: " + maiorNum(nums) + ".");
alert("A ordem crescente é: " + ordenCresc(nums));
