<?xml version='1.0' encoding='UTF-8'?>
<Library LVVersion="14008000">
	<Property Name="NI.Lib.Icon" Type="Bin">&amp;!#!!!!!!!)!"1!&amp;!!!-!%!!!@````]!!!!"!!%!!!(]!!!*Q(C=\&gt;8"=&gt;MQ%!8143;(8.6"2CVM#WJ",7Q,SN&amp;(N&lt;!NK!7VM#WI"&lt;8A0$%94UZ2$P%E"Y.?G@I%A7=11U&gt;M\7P%FXB^VL\`NHV=@X&lt;^39O0^N(_&lt;8NZOEH@@=^_CM?,3)VK63LD-&gt;8LS%=_]J'0@/1N&lt;XH,7^\SFJ?]Z#5P?=F,HP+5JTTF+5`Z&gt;MB$(P+1)YX*RU2DU$(![)Q3YW.YBG&gt;YBM@8'*\B':\B'2Z&gt;9HC':XC':XD=&amp;M-T0--T0-.DK%USWS(H'2\$2`-U4`-U4`/9-JKH!&gt;JE&lt;?!W#%;UC_WE?:KH?:R']T20]T20]\A=T&gt;-]T&gt;-]T?/7&lt;66[UTQ//9^BIHC+JXC+JXA-(=640-640-6DOCC?YCG)-G%:(#(+4;6$_6)]R?.8&amp;%`R&amp;%`R&amp;)^,WR/K&lt;75?GM=BZUG?Z%G?Z%E?1U4S*%`S*%`S'$;3*XG3*XG3RV320-G40!G3*D6^J-(3D;F4#J,(T\:&lt;=HN+P5FS/S,7ZIWV+7.NNFC&lt;+.&lt;GC0819TX-7!]JVO,(7N29CR6L%7,^=&lt;(1M4#R*IFV][.DX(X?V&amp;6&gt;V&amp;G&gt;V&amp;%&gt;V&amp;\N(L@_Z9\X_TVONVN=L^?Y8#ZR0J`D&gt;$L&amp;]8C-Q_%1_`U_&gt;LP&gt;WWPAG_0NB@$TP@4C`%`KH@[8`A@PRPA=PYZLD8Y!#/7SO!!!!!!</Property>
	<Property Name="NI.Lib.SourceVersion" Type="Int">335577088</Property>
	<Property Name="NI.Lib.Version" Type="Str">1.0.0.0</Property>
	<Property Name="NI.LV.All.SourceOnly" Type="Bool">false</Property>
	<Item Name="APIs" Type="Folder">
		<Property Name="NI.SortType" Type="Int">3</Property>
		<Item Name="Datatypes" Type="Folder">
			<Item Name="Responses" Type="Folder">
				<Item Name="Evaluation Result.ctl" Type="VI" URL="../APIs/Datatypes/Evaluation Result.ctl"/>
				<Item Name="Question Response.ctl" Type="VI" URL="../APIs/Datatypes/Question Response.ctl"/>
				<Item Name="Test Description.ctl" Type="VI" URL="../APIs/Datatypes/Test Description.ctl"/>
			</Item>
			<Item Name="Start Test.ctl" Type="VI" URL="../APIs/Datatypes/Start Test.ctl"/>
			<Item Name="Evaluate Result.ctl" Type="VI" URL="../APIs/Datatypes/Evaluate Result.ctl"/>
			<Item Name="Get Question.ctl" Type="VI" URL="../APIs/Datatypes/Get Question.ctl"/>
			<Item Name="Get Test Info.ctl" Type="VI" URL="../APIs/Datatypes/Get Test Info.ctl"/>
			<Item Name="Login.ctl" Type="VI" URL="../APIs/Datatypes/Login.ctl"/>
			<Item Name="Candidate Test Info.ctl" Type="VI" URL="../APIs/Datatypes/Candidate Test Info.ctl"/>
			<Item Name="Candidate Test Info Query.ctl" Type="VI" URL="../APIs/Datatypes/Candidate Test Info Query.ctl"/>
		</Item>
		<Item Name="Login Candidate.vi" Type="VI" URL="../APIs/Login Candidate.vi"/>
		<Item Name="Get Question.vi" Type="VI" URL="../APIs/Get Question.vi"/>
		<Item Name="Evaluate Answer.vi" Type="VI" URL="../APIs/Evaluate Answer.vi"/>
		<Item Name="Get Candidate Test Info.vi" Type="VI" URL="../APIs/Get Candidate Test Info.vi"/>
		<Item Name="Get Test Description.vi" Type="VI" URL="../APIs/Get Test Description.vi"/>
		<Item Name="Start Test.vi" Type="VI" URL="../APIs/Start Test.vi"/>
		<Item Name="Go Next Question.vi" Type="VI" URL="../APIs/Go Next Question.vi"/>
		<Item Name="Stop Application.vi" Type="VI" URL="../APIs/Stop Application.vi"/>
	</Item>
	<Item Name="SubVIs" Type="Folder">
		<Item Name="Enqueue Multiple.vi" Type="VI" URL="../SubVIs/Enqueue Multiple.vi"/>
		<Item Name="Get Next Question.vi" Type="VI" URL="../SubVIs/Get Next Question.vi"/>
		<Item Name="Get Question for Candidate.vi" Type="VI" URL="../Get Question for Candidate.vi"/>
		<Item Name="Path Constants.vi" Type="VI" URL="../SubVIs/Path Constants.vi"/>
		<Item Name="Queue Driver.vi" Type="VI" URL="../SubVIs/Queue Driver.vi"/>
		<Item Name="Start Test For Candidate.vi" Type="VI" URL="../SubVIs/Start Test For Candidate.vi"/>
		<Item Name="Update Tree for Candidate Info.vi" Type="VI" URL="../SubVIs/Update Tree for Candidate Info.vi"/>
		<Item Name="UserEvent Driver.vi" Type="VI" URL="../SubVIs/UserEvent Driver.vi"/>
	</Item>
	<Item Name="Typedefs" Type="Folder">
		<Item Name="Answer Info.ctl" Type="VI" URL="../Typedefs/Answer Info.ctl"/>
		<Item Name="Answer State.ctl" Type="VI" URL="../Typedefs/Answer State.ctl"/>
		<Item Name="Candidate State.ctl" Type="VI" URL="../Typedefs/Candidate State.ctl"/>
		<Item Name="Candidate.ctl" Type="VI" URL="../Typedefs/Candidate.ctl"/>
		<Item Name="DataCluster.ctl" Type="VI" URL="../Typedefs/DataCluster.ctl"/>
		<Item Name="Queue Data.ctl" Type="VI" URL="../Typedefs/Queue Data.ctl"/>
		<Item Name="Queue Driver Operations.ctl" Type="VI" URL="../Typedefs/Queue Driver Operations.ctl"/>
		<Item Name="Status Of Test.ctl" Type="VI" URL="../Typedefs/Status Of Test.ctl"/>
		<Item Name="Test Info.ctl" Type="VI" URL="../Typedefs/Test Info.ctl"/>
		<Item Name="TestQuestions.ctl" Type="VI" URL="../Typedefs/TestQuestions.ctl"/>
		<Item Name="User Event Data.ctl" Type="VI" URL="../Typedefs/User Event Data.ctl"/>
		<Item Name="User Event Operations.ctl" Type="VI" URL="../Typedefs/User Event Operations.ctl"/>
	</Item>
	<Item Name="Main.vi" Type="VI" URL="../Main.vi"/>
	<Item Name="Notes.vi" Type="VI" URL="../Notes.vi"/>
</Library>
