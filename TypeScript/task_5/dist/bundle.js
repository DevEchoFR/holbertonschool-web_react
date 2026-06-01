/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/

function sumMajorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MajorCredits',
    };
}
function sumMinorCredits(subject1, subject2) {
    return {
        credits: subject1.credits + subject2.credits,
        brand: 'MinorCredits',
    };
}
var majorSubject1 = {
    credits: 3,
    brand: 'MajorCredits',
};
var majorSubject2 = {
    credits: 4,
    brand: 'MajorCredits',
};
var minorSubject1 = {
    credits: 1,
    brand: 'MinorCredits',
};
var minorSubject2 = {
    credits: 2,
    brand: 'MinorCredits',
};
console.log(sumMajorCredits(majorSubject1, majorSubject2));
console.log(sumMinorCredits(minorSubject1, minorSubject2));

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQVVBLFNBQVMsZUFBZSxDQUN0QixRQUFzQixFQUN0QixRQUFzQjtJQUV0QixPQUFPO1FBQ0wsT0FBTyxFQUFFLFFBQVEsQ0FBQyxPQUFPLEdBQUcsUUFBUSxDQUFDLE9BQU87UUFDNUMsS0FBSyxFQUFFLGNBQWM7S0FDdEIsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGVBQWUsQ0FDdEIsUUFBc0IsRUFDdEIsUUFBc0I7SUFFdEIsT0FBTztRQUNMLE9BQU8sRUFBRSxRQUFRLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPO1FBQzVDLEtBQUssRUFBRSxjQUFjO0tBQ3RCLENBQUM7QUFDSixDQUFDO0FBRUQsSUFBTSxhQUFhLEdBQWlCO0lBQ2xDLE9BQU8sRUFBRSxDQUFDO0lBQ1YsS0FBSyxFQUFFLGNBQWM7Q0FDdEIsQ0FBQztBQUVGLElBQU0sYUFBYSxHQUFpQjtJQUNsQyxPQUFPLEVBQUUsQ0FBQztJQUNWLEtBQUssRUFBRSxjQUFjO0NBQ3RCLENBQUM7QUFFRixJQUFNLGFBQWEsR0FBaUI7SUFDbEMsT0FBTyxFQUFFLENBQUM7SUFDVixLQUFLLEVBQUUsY0FBYztDQUN0QixDQUFDO0FBRUYsSUFBTSxhQUFhLEdBQWlCO0lBQ2xDLE9BQU8sRUFBRSxDQUFDO0lBQ1YsS0FBSyxFQUFFLGNBQWM7Q0FDdEIsQ0FBQztBQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDO0FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHlwZXNjcmlwdF9kZXBlbmRlbmNpZXMvLi9qcy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImludGVyZmFjZSBNYWpvckNyZWRpdHMge1xuICBjcmVkaXRzOiBudW1iZXI7XG4gIGJyYW5kOiAnTWFqb3JDcmVkaXRzJztcbn1cblxuaW50ZXJmYWNlIE1pbm9yQ3JlZGl0cyB7XG4gIGNyZWRpdHM6IG51bWJlcjtcbiAgYnJhbmQ6ICdNaW5vckNyZWRpdHMnO1xufVxuXG5mdW5jdGlvbiBzdW1NYWpvckNyZWRpdHMoXG4gIHN1YmplY3QxOiBNYWpvckNyZWRpdHMsXG4gIHN1YmplY3QyOiBNYWpvckNyZWRpdHMsXG4pOiBNYWpvckNyZWRpdHMge1xuICByZXR1cm4ge1xuICAgIGNyZWRpdHM6IHN1YmplY3QxLmNyZWRpdHMgKyBzdWJqZWN0Mi5jcmVkaXRzLFxuICAgIGJyYW5kOiAnTWFqb3JDcmVkaXRzJyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3VtTWlub3JDcmVkaXRzKFxuICBzdWJqZWN0MTogTWlub3JDcmVkaXRzLFxuICBzdWJqZWN0MjogTWlub3JDcmVkaXRzLFxuKTogTWlub3JDcmVkaXRzIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVkaXRzOiBzdWJqZWN0MS5jcmVkaXRzICsgc3ViamVjdDIuY3JlZGl0cyxcbiAgICBicmFuZDogJ01pbm9yQ3JlZGl0cycsXG4gIH07XG59XG5cbmNvbnN0IG1ham9yU3ViamVjdDE6IE1ham9yQ3JlZGl0cyA9IHtcbiAgY3JlZGl0czogMyxcbiAgYnJhbmQ6ICdNYWpvckNyZWRpdHMnLFxufTtcblxuY29uc3QgbWFqb3JTdWJqZWN0MjogTWFqb3JDcmVkaXRzID0ge1xuICBjcmVkaXRzOiA0LFxuICBicmFuZDogJ01ham9yQ3JlZGl0cycsXG59O1xuXG5jb25zdCBtaW5vclN1YmplY3QxOiBNaW5vckNyZWRpdHMgPSB7XG4gIGNyZWRpdHM6IDEsXG4gIGJyYW5kOiAnTWlub3JDcmVkaXRzJyxcbn07XG5cbmNvbnN0IG1pbm9yU3ViamVjdDI6IE1pbm9yQ3JlZGl0cyA9IHtcbiAgY3JlZGl0czogMixcbiAgYnJhbmQ6ICdNaW5vckNyZWRpdHMnLFxufTtcblxuY29uc29sZS5sb2coc3VtTWFqb3JDcmVkaXRzKG1ham9yU3ViamVjdDEsIG1ham9yU3ViamVjdDIpKTtcbmNvbnNvbGUubG9nKHN1bU1pbm9yQ3JlZGl0cyhtaW5vclN1YmplY3QxLCBtaW5vclN1YmplY3QyKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=