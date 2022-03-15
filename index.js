//Part One
//*******************
function printRecords(arr) {
	arr = arr.map((e)=>studentRecords.find((record)=>record.id === e))
 arr.sort((a, b) => {
  if (a.name > b.name) {
   return 1
  }
  else if (a.name < b.name) {
   return -1
  }
  else {
   return 0
  }
	})
	arr.map((e)=>console.log(`${e.name} (${e.id}): ${e.paid ? "Paid" : "Not Paid"}`));
}

function paidStudentsToEnroll() {
	var enroll = studentRecords.filter((e)=> e.paid && !currentEnrollment.includes(e.id))
	enroll = enroll.map((e)=>e.id)
	printRecords([ ...currentEnrollment, ...enroll ])
}

function remindUnpaid(arr) {
	var unPaid = studentRecords.filter((e)=>!e.paid && arr.includes(e.id));
 unPaid = unPaid.map((e) => e = e.id)
 printRecords(unPaid)
}


//Part Two
//******************
var printRecords = (arr) =>
	arr = arr.map((e)=>studentRecords.find((record)=>record.id === e)).sort((a, b) => {
  if (a.name > b.name) {
   return 1
  }
  else if (a.name < b.name) {
   return -1
  }
  else {
   return 0
  }
	}).map((e)=>console.log(`${e.name} (${e.id}): ${e.paid ? "Paid" : "Not Paid"}`));

var paidStudentsToEnroll = () =>
	printRecords([ ...currentEnrollment, ...studentRecords.filter((e)=> e.paid && !currentEnrollment.includes(e.id)).map((e)=>e.id) ])

var remindUnpaid = (arr) =>
 printRecords(studentRecords.filter((e)=>!e.paid && arr.includes(e.id)).map((e) => e = e.id))

// ********************************

var currentEnrollment = [410, 105, 664, 375];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment)
console.log('----')
paidStudentsToEnroll()
console.log('----')
remindUnpaid(currentEnrollment)

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/