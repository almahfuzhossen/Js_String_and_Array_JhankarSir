const myFavDate = new Date('1991-12-26');
/* console.log(myFavDate); */

const anotherDate = new Date(1997, 3, 26, 11, 50, 60);
/* console.log(anotherDate); */

if (myFavDate.getTime()< anotherDate.getTime()){
    console.log('favorite is earlier')
}