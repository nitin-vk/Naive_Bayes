let table=document.querySelector('table')
let but1=document.querySelector('#submit')
let but2=document.querySelector('#generate')
let age=document.querySelector('#age')
let salary=document.querySelector('#salary')
let student=document.querySelector('#student')
let credit=document.querySelector('#credit')
let computer=document.querySelector('#computer')
let rage=document.querySelector('#refage')
let rsalary=document.querySelector('#refsalary')
let rstudent=document.querySelector('#refstudent')
let rcredit=document.querySelector('#refcredit')
let rcomputer=document.querySelector('#refcomputer')
/*let agearr=[]
let salaryarr=[]
let studentarr=[]
let creditarr=[]
let computerarr=[]*/

let agearr=['<=30','<=30','31-40','>40','>40','>40','31-40','<=30','<=30','>40','<=30','31-40','31-40','>40']
let salaryarr=['HIGH','HIGH','HIGH','MEDIUM','LOW','LOW','LOW','MEDIUM','LOW','MEDIUM','MEDIUM','MEDIUM','HIGH','MEDIUM']
let studentarr=['NO','NO','NO','NO','YES','YES','YES','NO','YES','YES','YES','NO','YES','NO']
let creditarr=['FAIR','EXCELLENT','FAIR','FAIR','FAIR','EXCELLENT','EXCELLENT','FAIR','FAIR','FAIR','EXCELLENT','EXCELLENT','FAIR','EXCELLENT']
let computerarr=['NO','NO','YES','YES','YES','NO','YES','NO','YES','YES','YES','YES','YES','NO']

let yes=0
let no=0
let refage=''
let refsalary=''
let refstudent=''
let refcredit=''
let refageyes=0
let refageno=0
let refsalaryyes=0
let refsalaryno=0
let refstudentyes=0
let refstudentno=0
let refcredityes=0
let refcreditno=0
let refyes=0
let refno=0
but1.onclick=function()
{
    //console.log('clicked')
    /*let tr=document.createElement('tr')
    let tdage=document.createElement('td')
    let tdsalary=document.createElement('td')
    let tdstudent=document.createElement('td')
    let tdcredit=document.createElement('td')
    let tdcomputer=document.createElement('td')
    tdage.append(age.value.toUpperCase())
    tdsalary.append(salary.value.toUpperCase())
    tdstudent.append(student.value.toUpperCase())
    tdcredit.append(credit.value.toUpperCase())
    tdcomputer.append(computer.value.toUpperCase())
    table.appendChild(tr)
    tr.appendChild(tdage)
    tr.appendChild(tdsalary)
    tr.appendChild(tdstudent)
    tr.appendChild(tdcredit)
    tr.appendChild(tdcomputer)
    agearr.push(age.value.toUpperCase())
    salaryarr.push(salary.value.toUpperCase())
    studentarr.push(student.value.toUpperCase())
    creditarr.push(credit.value.toUpperCase())
    computerarr.push(computer.value.toUpperCase())*/
    //console.log(studentarr)
   
    
    

}

but2.onclick=function()
{
    refage=rage.value.toUpperCase()
    refsalary=rsalary.value.toUpperCase()
    refstudent=rstudent.value.toUpperCase()
    refcredit=rcredit.value.toUpperCase()
    for(let i=0;i<computerarr.length;i++)
    {
        if(computerarr[i]=='YES')
        {
            yes+=1
        }
        else if(computerarr[i]=='NO')
        {
            no+=1
        }
    }
    let yesratio=yes/computerarr.length
    let noratio=no/computerarr.length
    console.log(yesratio)
    console.log(noratio)
    //console.log(yesratio)
    //console.log(noratio)
    for(let i=0;i<computerarr.length;i++)
    {
        if(agearr[i]==refage && computerarr[i]=='YES')
        {
            refageyes++
        }
        else if(agearr[i]==refage && computerarr[i]=='NO')
        {
            refageno++
        }
        if(salaryarr[i]==refsalary && computerarr[i]=='YES')
        {
            refsalaryyes++
        }
        else if(salaryarr[i]==refsalary && computerarr[i]=='NO')
        {
            refsalaryno++
        }
        if(studentarr[i]==refstudent && computerarr[i]=='YES')
        {
            refstudentyes++
        }
        else if(studentarr[i]==refstudent && computerarr[i]=='NO')
        {
            refstudentno++
        }
        if(creditarr[i]==refcredit && computerarr[i]=='YES')
        {
            refcredityes++
        }
        else if(creditarr[i]==refcredit && computerarr[i]=='NO')
        {
            refcreditno++
        }
    }
    refageyes=refageyes/yes
    refageno=refageno/no
    refsalaryyes=refsalaryyes/yes
    refsalaryno=refsalaryno/no
    refstudentyes=refstudentyes/yes
    refstudentno=refstudentno/no
    refcredityes=refcredityes/yes
    refcreditno=refcreditno/no
    refyes=refageyes*refsalaryyes*refstudentyes*refcredityes*yesratio
    refno=refageno*refsalaryno*refstudentno*refcreditno*noratio
    console.log(refageyes)
    console.log(refageno)
    console.log(refsalaryyes)
    console.log(refsalaryno)
    console.log(refstudentyes)
    console.log(refstudentno)
    console.log(refcredityes)
    console.log(refcreditno)
    
    
    
    if(refyes>refno)
    {
        rcomputer.value='YES'
    }
    else if(refno>refyes)
    {
        rcomputer.value='NO'
    }
    
    

}