<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-3" id="sticky-sidebar">
					<div class="sticky-top">
						<h2>this is test</h2>
						<ul id="zone"></ul>
					</div>
				</div>
				<div class="col" id="main">
					<h1>Main Area</h1>
					<p id="color">now it's the new branch name of test-user2</p>
					<button @click="testclick" class="p-4"></button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
				
		}
	},
	methods: {
		getData(){
			fetch('https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json')
			.then((res) => res.json())
			.then((data) =>{
				const area = document.querySelector('#zone');
				let dataResource = data.result.records;
				let AllZone = [];

				dataResource.forEach((item) => {
					AllZone.push(item.Zone);
				});
				let zone = AllZone.filter((item,index,array) =>{
					return array.indexOf(item) === index;
				});
				zone.forEach(item => {
					area.innerHTML += `
						<li>${item}</li>
					`
				});
			})
			.catch(error =>{
				alert("It's not working" + error);
			})
		},
		testclick(){
			$('#color').toggleClass('text-primary');
		}
	},
	mounted() {
		this.getData();
	},
}
</script>