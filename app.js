const requirements=[
 {title:"Week 4 lesson notes",meta:"24 teachers · Due 18 Sep",done:19,total:24,status:"Due soon",kind:"due-soon"},
 {title:"First term examination questions",meta:"18 subject teachers · Due 22 Sep",done:11,total:18,status:"On track",kind:"on-track"},
 {title:"Staff credential update",meta:"28 staff members · Due 15 Sep",done:25,total:28,status:"Overdue",kind:"overdue"},
 {title:"September departmental reports",meta:"6 department heads · Due 26 Sep",done:2,total:6,status:"On track",kind:"on-track"}
];
const submissions=[
 {title:"JSS 2 Basic Technology — Week 4",person:"Emeka A.",group:"Secondary",due:"18 Sep",status:"Awaiting review",kind:"review"},
 {title:"Primary 5 Mathematics — Week 4",person:"Blessing I.",group:"Primary",due:"18 Sep",status:"Awaiting review",kind:"review"},
 {title:"SS 1 Physics Examination Questions",person:"Kelvin J.",group:"Secondary",due:"22 Sep",status:"Approved",kind:"approved"},
 {title:"Staff Academic Credentials",person:"Chinwe O.",group:"Administration",due:"15 Sep",status:"Overdue",kind:"overdue"},
 {title:"Nursery 2 Weekly Report",person:"Mary O.",group:"Early Years",due:"14 Sep",status:"Approved",kind:"approved"},
 {title:"JSS 3 English — Week 4",person:"Adaeze N.",group:"Secondary",due:"18 Sep",status:"Awaiting review",kind:"review"}
];
const folders=[
 ["▰","Academic records","126 documents"],["♙","Staff records","48 documents"],["◫","Administrative letters","34 documents"],["▥","Policies & meetings","22 documents"],
 ["▣","Finance documents","19 documents"],["◇","Student & parent records","204 documents"],["✓","Approved templates","16 documents"],["⌁","Archived sessions","3 sessions"]
];
const documents=[
 ["First Term Examination Timetable.pdf","Academic records · Academic Office","PDF","Today"],
 ["Staff Meeting Minutes — September.docx","Policies & meetings · Secretary","DOCX","Yesterday"],
 ["JSS 2 Basic Technology Week 4.pdf","Lesson notes · Emeka A.","PDF","12 min ago"],
 ["New Staff Onboarding Checklist.xlsx","Staff records · Administration","XLSX","2 days ago"]
];
const people=[
 ["EA","Emeka Agbaje","Basic Technology Teacher","Teacher","12 submissions"],
 ["MO","Mary Okafor","Academic Coordinator","Reviewer","38 reviews"],
 ["BI","Blessing Ibe","Primary Teacher","Teacher","10 submissions"],
 ["CN","Chidi Nwosu","School Secretary","Administrator","24 documents"],
 ["AO","Ada Obi","Head Teacher","Reviewer","29 reviews"],
 ["TK","Tunde Kareem","Accountant","Finance","8 documents"]
];
const opportunities=[
 {logo:"GH",title:"ICT & Coding Instructor",org:"Gilead Heights Montessori and College",location:"Warri, Delta State",type:"Part-time",tags:["Teaching","ICT","On-site"],description:"Lead practical ICT, coding and STEAM sessions for junior and senior secondary learners.",posted:"Posted today"},
 {logo:"BA",title:"School Administrative Secretary",org:"Bright Acres Academy",location:"Port Harcourt, Rivers State",type:"Full-time",tags:["Administration","School office","Full-time"],description:"Coordinate correspondence, digital records, staff submissions and front-office communication.",posted:"Posted yesterday"},
 {logo:"LS",title:"Supply 20 Desktop Computers",org:"Learning Spring Schools",location:"Asaba, Delta State",type:"Vendor request",tags:["Vendor","Computers","Procurement"],description:"Verified suppliers are invited to submit quotations for a complete computer-lab upgrade.",posted:"Posted 2 days ago"}
];

const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function renderRequirements(){ $("#overviewRequirements").innerHTML=requirements.map(r=>`<article class="requirement"><div class="requirement-title"><div class="doc-icon">▤</div><div><h3>${r.title}</h3><p>${r.meta}</p></div></div><div class="progress-cell"><div class="progress-track"><i style="width:${Math.round(r.done/r.total*100)}%"></i></div><div class="progress-label"><span>${r.done} received</span><span>${r.total-r.done} pending</span></div></div><span class="status-pill ${r.kind}">${r.status}</span></article>`).join("");}
function renderSubmissions(filter="all",query=""){const rows=submissions.filter(s=>(filter==="all"||s.kind===filter)&&Object.values(s).join(" ").toLowerCase().includes(query.toLowerCase()));$("#submissionTable").innerHTML=`<div class="table-row header"><span>Document</span><span>Submitted by</span><span>Due date</span><span>Status</span><span></span></div>`+rows.map(s=>`<div class="table-row"><div class="table-main"><div class="doc-icon">▤</div><div><strong>${s.title}</strong><span>${s.group}</span></div></div><div class="table-cell">${s.person}</div><div class="table-cell">${s.due}</div><span class="status-pill ${s.kind}">${s.status}</span><button class="more-button">⋯</button></div>`).join("");}
function renderStatic(){
 $("#folderGrid").innerHTML=folders.map(f=>`<article class="folder"><span>${f[0]}</span><h3>${f[1]}</h3><p>${f[2]}</p></article>`).join("");
 $("#documentList").innerHTML=documents.map(d=>`<div class="document-row"><div><strong>${d[0]}</strong><span>${d[1]}</span></div><span class="file-type">${d[2]}</span><span>${d[3]}</span><button class="more-button">⋯</button></div>`).join("");
 $("#peopleGrid").innerHTML=people.map((p,i)=>`<article class="person-card"><div class="person-top"><div class="avatar ${i%3===0?'burgundy':i%3===1?'gold-bg':'soft'}">${p[0]}</div><div><h3>${p[1]}</h3><p>${p[2]}</p></div><button class="more-button">⋯</button></div><span class="role-tag">${p[3]}</span><div class="person-meta"><span>Active</span><span>${p[4]}</span></div></article>`).join("");
 $("#opportunityFeed").innerHTML=opportunities.map(o=>`<article class="opportunity-card"><div class="opportunity-top"><div class="opportunity-org"><div class="school-avatar">${o.logo}</div><div><h3>${o.title}</h3><p>${o.org} · ${o.location}</p></div></div><button class="save-job" aria-label="Save opportunity">♡</button></div><p class="description">${o.description}</p><div class="opportunity-tags">${o.tags.map(t=>`<span>${t}</span>`).join("")}</div><footer><span>${o.posted}</span><strong>${o.type}</strong></footer></article>`).join("");
}
function goTo(page){$$('.nav-item[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));$$('.page').forEach(p=>p.classList.remove('active'));$(`#${page}-page`).classList.add('active');$('#sidebar').classList.remove('open');window.scrollTo({top:0,behavior:'smooth'});}
function openModal(){ $('#modalBackdrop').hidden=false;setTimeout(()=>$('#requestForm input').focus(),0);}
function closeModal(){ $('#modalBackdrop').hidden=true;}
function toast(message){const el=$('#toast');el.textContent=message;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),2600);}

renderRequirements();renderSubmissions();renderStatic();
$$('.nav-item[data-page]').forEach(b=>b.addEventListener('click',()=>goTo(b.dataset.page)));
$$('[data-go]').forEach(b=>b.addEventListener('click',()=>goTo(b.dataset.go)));
$('#menuButton').addEventListener('click',()=>$('#sidebar').classList.toggle('open'));
$('#newRequestButton').addEventListener('click',openModal);$$('.open-request').forEach(b=>b.addEventListener('click',openModal));
$('#modalClose').addEventListener('click',closeModal);$('#cancelModal').addEventListener('click',closeModal);$('#modalBackdrop').addEventListener('click',e=>{if(e.target===e.currentTarget)closeModal()});
$('#requestForm').addEventListener('submit',e=>{e.preventDefault();const data=new FormData(e.currentTarget);requirements.unshift({title:data.get('title'),meta:`All teaching staff · Due ${data.get('due')}`,done:0,total:24,status:'On track',kind:'on-track'});renderRequirements();closeModal();e.currentTarget.reset();goTo('overview');toast('Submission request created successfully.');});
$('#statusFilters').addEventListener('click',e=>{if(!e.target.matches('button'))return;$$('#statusFilters button').forEach(b=>b.classList.remove('active'));e.target.classList.add('active');renderSubmissions(e.target.dataset.filter,$('#globalSearch').value)});
$('#globalSearch').addEventListener('input',e=>{goTo('submissions');const filter=$('#statusFilters .active').dataset.filter;renderSubmissions(filter,e.target.value)});
$('#reportButton').addEventListener('click',()=>toast('Weekly submission report prepared.'));
$('#uploadButton').addEventListener('click',()=>toast('Document upload will connect to secure storage.'));
$('#inviteButton').addEventListener('click',()=>toast('Member invitation flow is ready for account integration.'));
$('#postOpportunityButton').addEventListener('click',()=>toast('Opportunity publishing form is coming in the next build.'));
$$('.save-job').forEach(b=>b.addEventListener('click',()=>{b.textContent=b.textContent==='♡'?'♥':'♡';toast(b.textContent==='♥'?'Opportunity saved.':'Opportunity removed from saved.')}));
if('serviceWorker' in navigator)window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js'));
