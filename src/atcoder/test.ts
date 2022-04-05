const sortInventory = (inventory: any) => {
  inventory.sort((a:any, b:any) => {
    if (a.isSingle === b.isSingle) {
      if (a.deadline.value === b.deadline.value) {
        return a.location === b.location ? 0 : a.location < b.location ? -1 : 1;
      }
      console.log(`${a.isSingle}:a.deadline.value:${a.deadline.value}`)
      console.log(`${b.isSingle}:b.deadline.value:${b.deadline.value}`) 
      console.log(new Date(a.deadline.value).getTime()-new Date(b.deadline.value).getTime())
      return new Date(a.deadline.value).getTime() <
        new Date(b.deadline.value).getTime()
        ? -1
        : 1;
    }
    return a.isSingle ? -1 : 1;
  });

  return inventory;
};
const A = [
  {isSingle:false,location:"B-1",deadline:{value:"2022-02-01"}},
  {isSingle:false,location:"A-3",deadline:{value:"2022-01-01"}},
  {isSingle:true,location:"A-1",deadline:{value:"2022-05-01"}},
  {isSingle:true,location:"A-1",deadline:{value:"2022-02-01"}},
  {isSingle:false,location:"D-1",deadline:{value:"2022-02-01"}},
  {isSingle:true,location:"A-10",deadline:{value:"2022-09-01"}},
  {isSingle:true,location:"A-1",deadline:{value:"2022-10-01"}},
  ]

const res = sortInventory(A);
console.log(res)
