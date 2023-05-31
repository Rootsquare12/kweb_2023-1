const getDivisors= num => {
    const answer=[];
    const roll=Math.sqrt(num);
    for (let i=1; i<=roll; i++)
    {
        if (num % i == 0)
        {
            answer.push(i,num/i);
        }
    }
    answer.sort((a,b)=>(a-b));
    return answer;
};