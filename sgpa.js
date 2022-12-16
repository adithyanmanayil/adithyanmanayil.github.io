function credits(){
	//alert("working");
	var trade, sem, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10;
	trade=document.getElementById("trades").value;
	sem=document.getElementById("sem").value;
			
	//ct
	if(trade=="ct"){
		if(sem=="s1"){
			s1="EC I"; c1=3;
			s2="MATHEMATICS I"; c2=6;
			s3="PHYSICS I"; c3=3;
			s4="CHEMISTRY I"; c4=3;
			s5="GRAPHICS"; c5=0;
			s6="HEALTH & PHYSICAL"; c6=2;
			s7="WORKSHOP"; c7=0;
			s8="FUNDEMENTALS"; c8=4;
			s9="SCIENCE LAB"; c9=0;
			s10="None"; c10=0;
		}
		else if(sem=="s2"){
			s1="EC II"; c1=3;
			s2="MATHEMATICS II"; c2=6;
			s3="PHYSICS II"; c3=3;
			s4="CHEMISTRY II"; c4=3;
			s5="C PROGRAMMING"; c5=4;
			s6="GRAPHICS"; c6=5;
			s7="WORKSHOP"; c7=3;
			s8="C LAB"; c8=2;
			s9="LIFE SKILL"; c9=2;
			s10="SCIENCE LAB II"; c10=3;
		}
		else if(sem=="s3"){
			s1="DCP"; c1=4;
			s2="OOPS"; c2=5;
			s3="CA"; c3=4;
			s4="DBMS"; c4=4;
			s5="EVS"; c5=3;
			s6="DCP LAB"; c6=3;
			s7="OOPS LAB"; c7=3;
			s8="DBMS LAB"; c8=3;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s4"){
			s1="DC"; c1=4;
			s2="OS"; c2=4;
			s3="DS"; c3=5;
			s4="CSH"; c4=4;
			s5="SA LAB"; c5=3;
			s6="DS LAB"; c6=3;
			s7="CSH LAB"; c7=3;
			s8="AD LAB"; c8=5;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s5"){
			s1="PMSE"; c1=4;
			s2="WP"; c2=4;
			s3="MP&I"; c3=4;
			s4="CC"; c4=4;
			s5="WP LAB"; c5=4;
			s6="MP LAB"; c6=4;
			s7="CNE LAB"; c7=3;
			s8="PROJECT & SEMINAR"; c8=0;
			s9="IT/IV/CW"; c9=2;
			s10="NONE"; c10=0;
		}
		else if(sem=="s6"){
			document.getElementById("sub8mark").disabled=true;
			s1="MC"; c1=5;
			s2="CN"; c2=4;
			s3="SDP"; c3=5;
			s4="MC/NIM/ST"; c4=5;
			s5="MC LAB"; c5=3;
			s6="SDP LAB"; c6=3;
			s7="PROJECT & SEMINAR"; c7=10;
			s8="NONE"; c8=0;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else{}
	}
				
	else if(trade=="ec"){
		if(sem=="s1"){
			s1="EC I"; c1=3;
			s2="MATHEMATICS I"; c2=6;
			s3="PHYSICS I"; c3=3;
			s4="CHEMISTRY I"; c4=3;
			s5="GRAPHICS"; c5=0;
			s6="HEALTH & PHYSICAL"; c6=2;
			s7="WORKSHOP"; c7=0;
			s8="FUNDEMENTALS"; c8=4;
			s9="SCIENCE LAB"; c9=0;
			s10="None"; c10=0;
		}
		else if(sem=="s2"){
			s1="EC II"; c1=3;
			s2="MATHEMATICS II"; c2=6;
			s3="PHYSICS II"; c3=3;
			s4="CHEMISTRY II"; c4=3;
			s5="BE"; c5=4;
			s6="GRAPHICS"; c6=5;
			s7="WORKSHOP"; c7=3;
			s8="BE LAB"; c8=2;
			s9="LIFE SKILL"; c9=2;
			s10="SCIENCE LAB II"; c10=3;
		}
		else if(sem=="s3"){
			s1="ET"; c1=4;
			s2="ED & CIRCUITS"; c2=5;
			s3="DE"; c3=4;
			s4="CE"; c4=4;
			s5="EVS"; c5=3;
			s6="EC LAB"; c6=3;
			s7="DE LAB"; c7=3;
			s8="AC LAB"; c8=3;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s4"){
			s1="LIC"; c1=4;
			s2="EI & M"; c2=4;
			s3="M & I"; c3=5;
			s4="C PROGRAMMING"; c4=4;
			s5="LIC LAB"; c5=3;
			s6="M & I LAB"; c6=3;
			s7="C LAB"; c7=3;
			s8="MINI PROJECT"; c8=5;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s5"){
			s1="IM & S"; c1=4;
			s2="ES"; c2=4;
			s3="DC"; c3=4;
			s4="CS"; c4=2;
			s5="ES LAB"; c5=2;
			s6="PCB LAB"; c6=3;
			s7="IT/IV/CW"; c7=2;
			s8="PROJECT & SEMINAR"; c8=0;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s6"){
			document.getElementById("sub8mark").disabled=true;
			s1="CS"; c1=5;
			s2="CH & N"; c2=5;
			s3="ADVANCED MP"; c3=5;
			s4="RN/TE/DSP"; c4=4;
			s5="CH & N LAB"; c5=3;
			s6="HDL LAB"; c6=3;
			s7="PROJECT & SEMINAR"; c7=10;
			s8="NONE"; c8=0;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
	}
			
	//td
	else if(trade=="td"){
		if(sem=="s1"){
			s1="EC I"; c1=3;
			s2="MATHEMATICS I"; c2=6;
			s3="PHYSICS I"; c3=3;
			s4="CHEMISTRY I"; c4=3;
			s5="GRAPHICS"; c5=0;
			s6="HEALTH & PHYSICAL"; c6=2;
			s7="WORKSHOP"; c7=0;
			s8="FUNDEMENTALS"; c8=4;
			s9="SCIENCE LAB"; c9=0;
			s10="None"; c10=0;
		}
		else if(sem=="s2"){
			s1="EC II"; c1=3;
			s2="MATHEMATICS II"; c2=6;
			s3="PHYSICS II"; c3=3;
			s4="CHEMISTRY II"; c4=3;
			s5="PE I"; c5=4;
			s6="GRAPHICS"; c6=5;
			s7="WORKSHOP"; c7=3;
			s8="TE LAB I"; c8=2;
			s9="LIFE SKILL"; c9=2;
			s10="SCIENCE LAB II"; c10=3;
		}
		else if(sem=="s3"){
			s1="FM & P"; c1=6;
			s2="E & EE"; c2=5;
			s3="EM"; c3=6;
			s4="TED"; c4=6;
			s5="EVS"; c5=3;
			s6="METROLOGY LAB"; c6=2;
			s7="TE LAB II"; c7=2;
			s8="WORKSHOP"; c8=2;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s4"){
			s1="M & DT"; c1=5;
			s2="MT & HT"; c2=5;
			s3="APPLIED MECHANICS"; c3=5;
			s4="PE II"; c4=4;
			s5="TE LAB III"; c5=2;
			s6="M & D & HT"; c6=4;
			s7="MT LAB"; c7=2;
			s8="CADD"; c8=2;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s5"){
			s1="IM & S"; c1=4;
			s2="IE"; c2=4;
			s3="PTT"; c3=4;
			s4="DJFG"; c4=4;
			s5="PMT"; c5=4;
			s6="M & DD"; c6=3;
			s7="PTD"; c7=3;
			s8="PTL"; c8=3;
			s9="PROJECT & SEMINAR"; c9=0;
			s10="NONE"; c10=0;
		}
		else if(sem=="s6"){
			document.getElementById("sub8mark").disabled=true;
			s1="MPP"; c1=5;
			s2="TD"; c2=5;
			s3="CAD-CAM"; c3=4;
			s4="IA & M"; c4=4;
			s5="CAPTD LAB"; c5=6;
			s6="TE LAB III"; c6=4;
			s7="PROJECT & SEMINAR"; c7=10;
			s8="IT"; c8=10;
			s9="NONE"; c9=0;
			s10="NONE"; c10=0;
		}
	}
			
	//writing
	document.getElementById("sub1name").value=s1;
	document.getElementById("sub1credit").value=c1;
	document.getElementById("sub2name").value=s2;
	document.getElementById("sub2credit").value=c2;
	document.getElementById("sub3name").value=s3;
	document.getElementById("sub3credit").value=c3;
	document.getElementById("sub4name").value=s4;
	document.getElementById("sub4credit").value=c4;
	document.getElementById("sub5name").value=s5;
	document.getElementById("sub5credit").value=c5;
	document.getElementById("sub6name").value=s6;
	document.getElementById("sub6credit").value=c6;
	document.getElementById("sub7name").value=s7;
	document.getElementById("sub7credit").value=c7;
	document.getElementById("sub8name").value=s8;
	document.getElementById("sub8credit").value=c8;
	document.getElementById("sub9name").value=s9;
	document.getElementById("sub9credit").value=c9;
	document.getElementById("sub10name").value=s10;
	document.getElementById("sub10credit").value=c10;
}
//calculation
function calc(){
	var s1, s2, s3, s4, s5, s6, s7, s8, s9, s10, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, sum_credits, sum_marks, sgpa;
			
	//getsubmark
	s1=parseInt(document.getElementById("sub1mark").value);
	s2=parseInt(document.getElementById("sub2mark").value);
	s3=parseInt(document.getElementById("sub3mark").value);
	s4=parseInt(document.getElementById("sub4mark").value);
	s5=parseInt(document.getElementById("sub5mark").value);
	s6=parseInt(document.getElementById("sub6mark").value);
	s7=parseInt(document.getElementById("sub7mark").value);
	s8=parseInt(document.getElementById("sub8mark").value);
	s9=parseInt(document.getElementById("sub9mark").value);
	s10=parseInt(document.getElementById("sub10mark").value);
			
	//getcredit
	c1=parseInt(document.getElementById("sub1credit").value);
	c2=parseInt(document.getElementById("sub2credit").value)
	c3=parseInt(document.getElementById("sub3credit").value)
	c4=parseInt(document.getElementById("sub4credit").value)
	c5=parseInt(document.getElementById("sub5credit").value)
	c6=parseInt(document.getElementById("sub6credit").value)
	c7=parseInt(document.getElementById("sub7credit").value)
	c8=parseInt(document.getElementById("sub8credit").value)
	c9=parseInt(document.getElementById("sub9credit").value)
	c10=parseInt(document.getElementById("sub10credit").value)
			
	//calculations
	sum_credits = c1+c2+c3+c4+c5+c6+c7+c8;
	m1=s1*c1;
	m2=s2*c2;
	m3=s3*c3;
	m4=s4*c4;
	m5=s5*c5;
	m6=s6*c6;
	m7=s7*c7;
	m8=s8*c8;
	m9=s9*c9;
	m10=s10*c10;
	sum_marks=m1+m2+m3+m4+m5+m6+m7+m8+m9+m10;
			
	sgpa = sum_marks/sum_credits;
			
	document.getElementById("cgpa").value=cgpa;
}