"use strict";

        var new_rashods = 0;
		var new_in = 1;

		//#region FREE

		document.getElementById('income1').addEventListener( 'change', calculateIncomeBut );
		document.getElementById('rost1').addEventListener( 'change', calculateRostBut );
		// document.getElementById('prashody1').addEventListener( 'change', prashodyBut );
		document.getElementById('rashody1').addEventListener( 'change', rashodyBut );
		document.getElementById('porashody1').addEventListener( 'change', porashodyBut );

		for(let m = 2; m<=12; m++){
			document.getElementById('income' + m.toString()).addEventListener( 'change', calculateIncome );
			document.getElementById('rost' + m.toString()).addEventListener( 'change', calculateRost );
			// document.getElementById('prashody' + m.toString()).addEventListener( 'change', calcAllFree );
			document.getElementById('rashody' + m.toString()).addEventListener( 'change', calcAllFree );
			document.getElementById('porashody' + m.toString()).addEventListener( 'change', calcAllFree );
		}

		document.getElementById('income0').addEventListener( 'click', calculateIncomeBut );
		// document.getElementById('download').addEventListener( 'click', download_table_as_csv("results") );

		function calculateIncome(){
			
			var income1 = document.getElementById("income1").value;
			document.getElementById("tincome1").innerHTML = income1;
			var rosts = [];

			for( let i = 0; i<= 11; i++){
				if(document.getElementById("rost" + (i+1).toString()).value){
					rosts[i] = parseFloat(document.getElementById("rost" + (i+1).toString()).value);
				}
				else{
					rosts[i] = 0;
				}
			}
			iterateRost(0, rosts, iterateRost);
		}

		function iterateRost(i, rosts, callback){
			if(i <= 10){
				let old = document.getElementById("income" + (i+1).toString()).value;
				let pred = parseFloat(old);
				pred = pred;
				let n = rosts[i]*pred/100;
				n = n;
				let sum = pred + n;
				sum = sum;
				let el = document.getElementById("income" + (i+2).toString()).value;
				if(el == ""){
					document.getElementById("income" + (i+2).toString()).value = sum.toFixed(2).toString();
					document.getElementById("tincome" + (i+2).toString()).innerHTML = sum.toFixed(2).toString();
				}
				calcAllFree();
				callback(i+1, rosts, iterateRost);
			}
		}

		function calculateIncomeBut(){
			
			var income1 = document.getElementById("income1").value;
			document.getElementById("tincome1").innerHTML = income1;
			var rosts = [];

			for( let i = 0; i<= 11; i++){
				if(document.getElementById("rost" + (i+1).toString()).value){
					rosts[i] = parseFloat(document.getElementById("rost" + (i+1).toString()).value);
				}
				else{
					rosts[i] = 0;
				}
			}
			iterateRostBut(0, rosts, iterateRostBut);
		}

		function iterateRostBut(i, rosts, callback){
			if(i <= 10){
				let old = document.getElementById("income" + (i+1).toString()).value;
				let pred = parseFloat(old);
				pred = pred;
				let n = rosts[i]*pred/100;
				n = n;
				let sum = pred + n;
				sum = sum;
				let el = document.getElementById("income" + (i+2).toString()).value;
				document.getElementById("income" + (i+2).toString()).value = sum.toFixed(2).toString();
				document.getElementById("tincome" + (i+2).toString()).innerHTML = sum.toFixed(2).toString();
				calcAllFree();
				callback(i+1, rosts, iterateRostBut);
			}
		}

		function calculateRost(){
			var rost1 = document.getElementById("rost1").value
			document.getElementById("trost1").innerHTML = rost1;
			for( let i = 1; i<= 11; i++){
				if(document.getElementById("rost" + (i+1).toString()).value == ''){
					document.getElementById("rost" + (i+1).toString()).value = rost1;
					document.getElementById("trost" + (i+1).toString()).innerHTML = rost1;
				}
			}
			document.getElementById('income0').click();
		}

		function calculateRostBut(){
			var rost1 = document.getElementById("rost1").value
			document.getElementById("trost1").innerHTML = rost1;
			for( let i = 1; i<= 11; i++){
				document.getElementById("rost" + (i+1).toString()).value = rost1;
				document.getElementById("trost" + (i+1).toString()).innerHTML = rost1;
			}
			document.getElementById('income0').click();
		}

		function rashodyBut(){
			var rashod1 = document.getElementById("rashody1").value;
			document.getElementById("trashody1").innerHTML = rashod1;
			// console.log("SHIT!");
			for( let i = 1; i<= 12; i++){
				document.getElementById("rashody" + (i).toString()).value = rashod1;
				document.getElementById("trashody" + (i).toString()).innerHTML = rashod1;
			}
			calcAllFree();
		}

		function porashodyBut(){
			var porashod1 = document.getElementById("porashody1").value;
			document.getElementById("tporashody1").innerHTML = porashod1;
			// console.log("SHIT!");
			for( let i = 1; i<= 12; i++){
				document.getElementById("porashody" + (i).toString()).value = porashod1;
				document.getElementById("tporashody" + (i).toString()).innerHTML = porashod1;
			}
			calcAllFree();
		}

		function calcAllFree(){

			for( let i = 1; i<= 12; i++){

				let income = document.getElementById("income" + (i).toString()).value;
				document.getElementById("tincome" + (i).toString()).innerHTML = income;
				document.getElementById("trost" + (i).toString()).innerHTML = document.getElementById("rost" + (i).toString()).value;

				let rashod = document.getElementById("rashody" + (i).toString()).value;
				if(rashod == ''){
					rashod = 0;
				}
				else{
					rashod = parseFloat(rashod);
					
				}
				document.getElementById("trashody" + (i).toString()).innerHTML = rashod;
			
				let porashod = document.getElementById("porashody" + (i).toString()).value;
				if(porashod == ''){
					porashod = 0;
				}
				else{
					porashod = parseFloat(porashod);
				}
				document.getElementById("tporashody" + (i).toString()).innerHTML = porashod;

				let marja = 0;

				if (document.getElementById("rashodtype").value == "2"){
					marja = income - rashod;
				} else{
					marja = income - income*rashod/100;
				}
				

				document.getElementById("mdohod" + (i).toString()).value = marja.toFixed(2).toString();
				document.getElementById("tmdohod" + (i).toString()).innerHTML = marja.toFixed(2).toString();
				

				let ebitda = marja - porashod;

				// console.log(ebitda);

				document.getElementById("ebitda" + (i).toString()).innerText = ebitda.toFixed(2).toString();
				document.getElementById("tebitda" + (i).toString()).innerText = ebitda.toFixed(2).toString();

			}

		}

        String.prototype.replaceAll = function(search, replace){
            return this.split(search).join(replace);
        }

		function download_table_as_csv(table_id) {
			// Select rows from table_id
			var rows = document.querySelectorAll('table#' + table_id + ' tr');
			// Construct csv
			var csv = [];
			for (var i = 0; i < rows.length; i++) {
				var row = [], cols = rows[i].querySelectorAll('td, th');
				for (var j = 0; j < cols.length; j++) {
					// Clean innertext to remove multiple spaces and jumpline (break csv)
					var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
					// Escape double-quote with double-double-quote (see https://stackoverflow.com/questions/17808511/properly-escape-a-double-quote-in-csv)
					data = data.replace(/"/g, '""');
					// Push escaped string
					row.push('"' + data + '"');
				}
				csv.push(row.join(','));
			}
			var csv_string = csv.join('\n');
			// Download it
			var filename = 'Fintex.csv';
			var link = document.createElement('a');
			link.style.display = 'none';
			link.setAttribute('target', '_blank');
			link.setAttribute('href', 'data:text/csv;charset=utf-8,%EF%BB%BF' + encodeURIComponent(csv_string));
			link.setAttribute('download', filename);
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
		}

        function add_rashod() {
            var new_r = `
							<div class="cell" style="padding-left: 100px; background:#fbf2ff;">
								Статья: <br> <input type="text" id="NNpodname" placeholder="Название" onchange="change_name_poras('NN')">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<a href="https://fintex.kz/fin-model-instruction/#postrashody" target="_blank">
									<button>
										<i class="material-icons">info</i>
									</button>
                                </a>
                                <br>
									<button id="add_rashod" onclick="remove_rashod('NN')">
										<i class="material-icons">remove_circle_outline</i>
									</button>
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody1" value="0" onchange="populate_poras('NN')">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody2" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody3" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody4" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody5" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody6" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody7" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody8" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody9" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody10" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody11" value="0">
							</div>
							<div class="cell" style="background:#fbf2ff;">
								<input type="number" id="NNporashody12" value="0">
							</div>
            `;

            var el = document.getElementById("temp" + new_rashods.toString());
            el.className = "row";
            el.innerHTML = new_r.replaceAll("NN", new_rashods.toString());
            

            var parent = document.getElementById("results");
            var elem = document.createElement('tr');
            elem.id = new_rashods.toString() + "tr";
            var ths = `
                <td id="NNtporashody0"></td>
                <td id="NNtporashody1"></td>
                <td id="NNtporashody2"></td>
                <td id="NNtporashody3"></td>
                <td id="NNtporashody4"></td>
                <td id="NNtporashody5"></td>
                <td id="NNtporashody6"></td>
                <td id="NNtporashody7"></td>
                <td id="NNtporashody8"></td>
                <td id="NNtporashody9"></td>
                <td id="NNtporashody10"></td>
                <td id="NNtporashody11"></td>
                <td id="NNtporashody12"></td>
            `;
            var container = document.getElementById("ebitable");
            parent = container.parentElement;
            elem.innerHTML = ths.replaceAll("NN", new_rashods.toString());
            parent.insertBefore(elem, container);

            new_rashods = new_rashods + 1;
            sum_poras();
        }

        function remove_rashod(NN) {
            document.getElementById("temp" + NN).remove();
            document.getElementById(NN + "tr").remove();
            sum_poras();
        }
        
        function change_name_poras(NN) {
            document.getElementById(NN + "tporashody0").innerHTML = "Статья: " + document.getElementById(NN + "podname").value;
        }

        function populate_poras(NN){
            var giga = parseFloat(document.getElementById(NN + "porashody1").value);
            for( let i = 1; i<= 12; i++){
                document.getElementById(NN + "porashody" + i.toString()).value = giga;
                document.getElementById(NN + "tporashody" + i.toString()).innerHTML = giga;
            }
            sum_poras();
        }

        function sum_poras() {
            
            for( let i = 1; i<= 12; i++){
                var sums = 0;
                for(let m = 0; m<=new_rashods; m++){
                    try{
                        sums = sums + parseFloat(document.getElementById(m.toString() + "porashody" + i.toString()).value);
                    }
                    catch{
                        sums = sums;
                    }
                }
				document.getElementById("porashody" + (i).toString()).value = sums;
				document.getElementById("tporashody" + (i).toString()).innerHTML = sums;
			}
            calcAllFree();
        }
		// #endregion: FREE


		function add_in() {
            var new_r = `
						<div class="cell">
								<input id="nameinNN" placeholder="Капитальные вложения" onchange="amortizacia()">
							</div>
							<div class="cell">
								<a href="https://fintex.kz/fin-model-instruction/#postrashody" target="_blank">
									<button>
										<i class="material-icons">info</i>
									</button>
                                </a>
                                <br>
									<button onclick="remove_in('NN')">
										<i class="material-icons">remove_circle_outline</i>
									</button>
							</div>
							<div class="cell">
								<input type="number" id="summinNN" placeholder="-" onchange="amortizacia()">
							</div>
							<div class="cell">
								<input type="number" id="periodinNN" value="12" onchange="amortizacia()">
							</div>
            `;

            var el = document.getElementById("tempin" + new_in.toString());
            el.className = "row";
            el.innerHTML = new_r.replaceAll("NN", new_in.toString());
            amortizacia();

			var elem = document.createElement('tr');
            elem.id = new_in.toString() + "tinv";
            var ths = `
				<td id="tnameinNN"></td>
				<td id="tsumminNN"></td>
				<td id="tperiodinNN"></td>
            `;
            var container = document.getElementById("kek");
            parent = container.parentElement;
            elem.innerHTML = ths.replaceAll("NN", new_in.toString());
            parent.insertBefore(elem, container);

            new_in = new_in + 1;
        }

		function remove_in(NN) {
            document.getElementById("tempin" + NN).remove();
			amortizacia();
        }

		function amortizacia(){
			let all = 0;
			let ans = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
			for( let k = 0; k<new_in; k++){
				let months = parseFloat(document.getElementById("periodin" + k.toString()).value);
				let summm = parseFloat(document.getElementById("summin" + k.toString()).value);
				let val = summm/months;

				let namy = document.getElementById("namein"+k.toString()).value;
				console.log(namy);

				document.getElementById("tnamein"+k.toString()).innerHTML = namy;
				document.getElementById("tsummin"+k.toString()).innerHTML = summm;
				document.getElementById("tperiodin"+k.toString()).innerHTML = months;
				
				let max = 0;
				if (months>12){
					max = 12;
				}
				else{
					max = months;
				}
				for (let bb = 0; bb<max; bb ++){
					ans[bb] = ans[bb] + val;

					// Add to table
					document.getElementById("tnamein" + k.toString()).innerHTML = val;


				}
			}

			for (let gg = 1; gg<=12; gg++){
				document.getElementById("amor"+gg.toString()).value = ans[gg-1];
			}
		}
		
