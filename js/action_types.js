var place_settlement_image = "<img src='images/action_types/place_settlement.png' style='height: 5.8cm; border: 1px solid black;'>"
var settlement_description = "Place a settlement building on a corner (and receive one VP). In the initial placement phase each player places two settlements (and two roads) for free (in the order P1, P2, P3, P4, P4, P3, P2, P1, placing one settlement and one road attached to that settlement at a time). Outside of the initial placement phase a settlement can be placed on a valid corner at the cost of a sheep, a wheat, an ore and a brick. A settlement can only be placed on a corner if all of the adjacent corners contain no building and outisde of the initial placement phase must be connected via roads to other settlements/cities that the player has already placed. Whenever any player rolls a dice, any settlement on a tile with the number rolled will mean that the owner gets one resource of the type associated with that tile. Each player can have a maximum of five settlements on the board at one time.";

var place_road_image = "<img src='images/action_types/place_road.png' style='height: 5.8cm; border: 1px solid black;'>"
var road_description = "Place a road along an edge of a tile. Roads are used to expand out so that new settlements can be placed on new corners. Outside of the initial placement phase roads cost a wood and a brick to build (unless the road building development card is played, in which case two roads can be placed at no cost). Roads must always be connected to either a settlement or another road placed by that player. The player with the longest continuously connected path of roads (of at least 5) will hold the 'longest road' card, worth two victory points, until someone is able to build a longer connected path."

var place_city_image = "<img src='images/action_types/upgrade_to_city.png' style='height: 5.8cm; border: 1px solid black;'>"
var city_description = "Upgrade an existing settlement to a city. This costs three ore and two wheat. Where a settlement receives only one resource when the number of a tile it touches is rolled, a city instead receives two of that resource. Upgrading a settlement to a city also provides an additional victory point."

var buy_devcard_image = "<img src='images/action_types/buy_devcard.png' style='height: 5.8cm; border: 1px solid black;'>"
var buy_devcard_description = "Buy a development card (costs 1 wheat, 1 sheep and 1 ore). There are five types of development card - 14 knights, 5 victory point cards, 2 'monopoly' cards, 2 'road building' cards and 2 'year of plenty' cards. The card received is randomly chosen from a shuffled deck. Note that a card cannot be played on the same turn it is bought."

var play_devcard_image = "<img src='images/action_types/play_devcard.png' style='height: 5.8cm; border: 1px solid black;'>"
var play_devcard_description = "Play a development card (must have been bought before the current turn). Note that only one development card can be played per turn. A knight card allows the player to move the robber to a tile of their choice (which also allows them to steal a resource). Additionally, the player with the most knights played (must be three or more) will hold the 'largest army' card, worth 2 VP, until another player plays more. A victory point card gives the player 1 VP. A road building card allows the user to play two roads at no cost. The monopoly card allows the user to choose a resource type and force all other players to give them all of that resource they currently have. Year of plenty allows the user to take any two available resources from the bank."

var exchange_resource_image = "<img src='images/action_types/exchange_resource.png' style='height: 5.8cm; border: 1px solid black;'>"
var exchange_resource_description = "Resources can be exchanged with the bank. By default this is done at a rate of 4 to 1, however the rate can be reduced by controlling harbours (e.g. the wood harbour allows you two trade wood for other resources at a rate of 2 to 1)."

var propose_trade_image = "<img src='images/action_types/propose_trade.png' style='height: 5.8cm; border: 1px solid black;'>"
var propose_trade_description = "Players can trade resources with each other at a mutually agreeable rate. We place a constraint of a maximum of 4 resources being sent and 4 being received in a single trade."

var respond_to_trade_image = "<img src='images/action_types/respond_to_trade.png' style='height: 5.8cm; border: 1px solid black;'>"
var respond_to_trade_description = "If a trade is proposed to a player, that player needs to decide whether or not to accept the deal."

var move_robber_image = "<img src='images/action_types/move_robber.png' style='height: 5.8cm; border: 1px solid black;'>"
var move_robber_description = "Whenever a player rolls a 7 or plays a 'knight' development card they are able to move the robber token to a tile of their choice. The robber token prevents any resources being gathered when the number on that tile is rolled. Additionally the player is then able to steal a resource from any player with a settlement/city on the tile the robber is moved to."

var roll_dice_image = "<img src='images/action_types/roll_dice.png' style='height: 5.8cm; border: 1px solid black;'>"
var roll_dice_description = "At the start of each turn the dice are rolled. All players with a building on any tile showing the number rolled receives resources. If a 7 is rolled, all players that have more than 7 resources must discard resources until they have only 7 left. Note: it is actually allowable to play a development card before rolling the dice, so rolling the dice is not always the first action of a turn."

var end_turn_image = "<img src='images/action_types/end_turn.png' style='height: 5.8cm; border: 1px solid black;'>"
var end_turn_description = "End the turn and pass control on to the next player."

var steal_resource_image = "<img src='images/action_types/steal_resource.png' style='height: 5.8cm; border: 1px solid black;'>"
var steal_resource_description = "After moving the robber (when a 7 is rolled or having played a knight development card) a resource can be stolen from any player with a building on the tile the robber was moved to."

var discard_resource_image = "<img src='images/action_types/discard_resource.png' style='height: 5.8cm; border: 1px solid black;'>"
var discard_resource_description = "When a 7 is rolled, all players who have more than 7 resources must discard resources until they only have 7 left."

function update_action_information(action_type) {
	if(action_type == "settlement") {
		document.getElementById("actiontypeimage").innerHTML = place_settlement_image
		document.getElementById("actiontypetext").innerHTML = settlement_description
	} else if(action_type == "road") {
		document.getElementById("actiontypeimage").innerHTML = place_road_image
		document.getElementById("actiontypetext").innerHTML = road_description
	} else if(action_type == "city") {
		document.getElementById("actiontypeimage").innerHTML = place_city_image
		document.getElementById("actiontypetext").innerHTML = city_description
	} else if(action_type == "buydevcard") {
		document.getElementById("actiontypeimage").innerHTML = buy_devcard_image
		document.getElementById("actiontypetext").innerHTML = buy_devcard_description
	} else if(action_type == "playdevcard") {
		document.getElementById("actiontypeimage").innerHTML = play_devcard_image
		document.getElementById("actiontypetext").innerHTML = play_devcard_description
	} else if(action_type == "exchangeres") {
		document.getElementById("actiontypeimage").innerHTML = exchange_resource_image
		document.getElementById("actiontypetext").innerHTML = exchange_resource_description
	} else if(action_type == "proposetrade") {
		document.getElementById("actiontypeimage").innerHTML = propose_trade_image
		document.getElementById("actiontypetext").innerHTML = propose_trade_description
	} else if(action_type == "respondtotrade") {
		document.getElementById("actiontypeimage").innerHTML = respond_to_trade_image
		document.getElementById("actiontypetext").innerHTML = respond_to_trade_description
	} else if(action_type == "moverobber") {
		document.getElementById("actiontypeimage").innerHTML = move_robber_image
		document.getElementById("actiontypetext").innerHTML = move_robber_description
	} else if(action_type == "rolldice") {
		document.getElementById("actiontypeimage").innerHTML = roll_dice_image
		document.getElementById("actiontypetext").innerHTML = roll_dice_description
	} else if(action_type == "endturn") {
		document.getElementById("actiontypeimage").innerHTML = end_turn_image
		document.getElementById("actiontypetext").innerHTML = end_turn_description
	} else if(action_type == "stealres") {
		document.getElementById("actiontypeimage").innerHTML = steal_resource_image
		document.getElementById("actiontypetext").innerHTML = steal_resource_description
	} else if(action_type == "discardres") {
		document.getElementById("actiontypeimage").innerHTML = discard_resource_image
		document.getElementById("actiontypetext").innerHTML = discard_resource_description
	}
}

update_action_information('settlement')