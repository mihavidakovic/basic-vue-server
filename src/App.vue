<template>
	<div id="app">
		<Counter></Counter>
	</div>
</template>

<script>
	
	import Counter from '@/app/Counter'
	export default {
		name: 'app',
		components: {
			Counter
		}
	}
</script>

<style lang="sass">
	@import '~styles/app'
</style>