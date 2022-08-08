// 时间格式化
export const dateOne = (e) =>{
  let d = new Date(e);
  let Y = d.getFullYear();
  let M = d.getMonth() + 1;
  let D = d.getDate();

  if (D<10){
    D = '0' + D
  }

  if(M<10){
    M = '0' + M
  }

  let dates = Y + '.' + M + '.' + D;

  return dates;
}

export const cardColor = [
  'rgba(255,227,148,0.30)',
  'rgba(252,175,162,0.30)',
  'rgba(146,230,245,0.30)',
  'rgba(168,237,138,0.31)',
  'rgba(202,167,247,0.31)',
  'rgba(212,212,212,0.31)',
];

export const cardColor1 = [
  'rgba(255,227,148,1)',
  'rgba(252,175,162,1)',
  'rgba(146,230,245,1)',
  'rgba(168,237,138,1)',
  'rgba(202,167,247,1)',
  'rgba(212,212,212,1)',
]
