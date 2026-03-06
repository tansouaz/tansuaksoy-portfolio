export default function Skills() {

const skillGroups = [

{
title:"Programming Languages",
skills:[
{ name:"Python", level:100 },
{ name:"C", level:100 },
{ name:"C#", level:100 },
{ name:"SQL", level:100 }
]
},

{
title:"Web Development",
skills:[
{ name:"HTML", level:100 },
{ name:"CSS", level:100 },
{ name:"JavaScript", level:100 },
{ name:"React", level:100 }
]
},

{
title:"Computer Science",
skills:[
{ name:"Object-Oriented Programming", level:90 },
{ name:"Data Structures", level:85 }
]
},

{
title:"IT Infrastructure",
skills:[
{ name:"IT Infrastructure", level:90 },
{ name:"System Administration", level:90 },
{ name:"Network Configuration", level:90 },
{ name:"Troubleshooting", level:90 }
]
},

{
title:"Database",
skills:[
{ name:"Database Management", level:90 },
{ name:"Performance Optimization", level:85 }
]
},

{
title:"Enterprise Systems",
skills:[
{ name:"ERP Systems", level:85 },
{ name:"Enterprise Software Support", level:85 }
]
},

{
title:"Automation & Tools",
skills:[
{ name:"Git", level:85 },
{ name:"Technical Support", level:90 },
{ name:"Process Automation", level:85 }
]
}

]

return (

<section className="min-h-screen gradient-bg text-white pt-32 pb-40 px-8">

<div className="max-w-6xl mx-auto">

<h2 className="text-4xl font-bold text-center mb-20">
Skills
</h2>

<div className="space-y-16">

{skillGroups.map((group,index)=>(
<div key={index}>

<h3 className="text-2xl font-semibold mb-8 text-orange-400">
{group.title}
</h3>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

{group.skills.map((skill,i)=>(
<div
key={i}
className="glass p-6 rounded-xl hover:scale-[1.03] transition duration-300"
>

<div className="flex justify-between mb-2 text-sm">

<span className="font-medium">
{skill.name}
</span>

<span className="text-orange-400">
{skill.level}%
</span>

</div>

<div className="w-full h-2 bg-gray-700 rounded-full">

<div
className="h-2 bg-orange-500 rounded-full transition-all duration-700"
style={{width:`${skill.level}%`}}
/>

</div>

</div>
))}

</div>

</div>
))}

</div>

{/* CERTIFICATION */}

<div className="mt-28">

<h2 className="text-4xl font-bold text-center mb-12">
Certification
</h2>

<div className="glass p-8 rounded-xl text-center max-w-xl mx-auto">

<h3 className="text-xl font-semibold mb-2">
CS50X – Harvard University
</h3>

<p className="text-gray-300 mb-1">
(HarvardX)
</p>

<p className="text-orange-400">
Verified Certificate – 2026
</p>

</div>

</div>

</div>

</section>

)

}