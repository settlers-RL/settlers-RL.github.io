var g_action_head = d3.select("#action-space-app").append("g");

var lstm_output_box_width = 300;
var lstm_output_box_height = 50;
var lstm_output_box_x = 800;
var lstm_output_box_y = 390;

var lstm_output_box = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", lstm_output_box_x).attr("y", lstm_output_box_y).attr("width", lstm_output_box_width).attr("height", lstm_output_box_height).attr("class", "lstm_output")
var lstm_output_text = g_action_head.append("text").text("Output from LSTM").attr("x", lstm_output_box_x + 100).attr("y", lstm_output_box_y + 29).attr("class", "head_text")
text_width = lstm_output_text.node().getBBox().width;
lstm_output_text.attr("x", lstm_output_box_x + (lstm_output_box_width / 2.0) - text_width / 2.0)


var current_trade_box_width = 300;
var current_trade_box_height = lstm_output_box_height;
var current_trade_box_x = 1400;
var current_trade_box_y = lstm_output_box_y

var current_trade_box = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", current_trade_box_x).attr("y", current_trade_box_y).attr("width", current_trade_box_width).attr("height", current_trade_box_height).attr("class", "lstm_output")
var current_trade_text = g_action_head.append("text").text("Proposed Trade (or zeros)").attr("x", current_trade_box_x + 75).attr("y", current_trade_box_y + 29).attr("class", "head_text")
text_width = current_trade_text.node().getBBox().width;
current_trade_text.attr("x", current_trade_box_x + (current_trade_box_width / 2.0) - text_width / 2.0)


var current_res_box_width = 300;
var current_res_box_height = lstm_output_box_height;
var current_res_box_x = 2450;
var current_res_box_y = lstm_output_box_y

var current_res_box = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", current_res_box_x).attr("y", current_res_box_y).attr("width", current_res_box_width).attr("height", current_res_box_height).attr("class", "lstm_output")
var current_res_text = g_action_head.append("text").text("Current Resources").attr("x", current_res_box_x + 100).attr("y", current_res_box_y + 29).attr("class", "head_text")
text_width = current_res_text.node().getBBox().width;
current_res_text.attr("x", current_res_box_x + (current_res_box_width / 2.0) - text_width / 2.0)


/*
Action head rectangles
*/
var head_box_width = 120;
var head_box_height = 50;
var head_box_y = 275;
var dist_between_heads = 140;

var action_type_head_x = 80;
var action_type_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", action_type_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var action_type_head_text = g_action_head.append("text").text("Action Type").attr("x", action_type_head_x + 18).attr("y", head_box_y+29).attr("class", "head_text")
text_width = action_type_head_text.node().getBBox().width;
action_type_head_text.attr("x", action_type_head_x + (head_box_width / 2.0) - text_width / 2.0)


var corner_head_x = action_type_head_x + head_box_width + dist_between_heads;
var corner_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", corner_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var corner_head_text = g_action_head.append("text").text("Corner").attr("x", corner_head_x + 36).attr("y", head_box_y+29).attr("class", "head_text")
text_width = corner_head_text.node().getBBox().width
corner_head_text.attr("x", corner_head_x + (head_box_width / 2.0) - text_width / 2.0)

var edge_head_x = corner_head_x + head_box_width + dist_between_heads;
var edge_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", edge_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var edge_head_text = g_action_head.append("text").text("Edge").attr("x", edge_head_x + 44).attr("y", head_box_y+29).attr("class", "head_text")
text_width = edge_head_text.node().getBBox().width;
edge_head_text.attr("x", edge_head_x + (head_box_width / 2.0) - (text_width/2.0))

var tile_head_x = edge_head_x + head_box_width + dist_between_heads;
var tile_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", tile_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var tile_head_text = g_action_head.append("text").text("Tile").attr("x", tile_head_x + 44).attr("y", head_box_y+29).attr("class", "head_text")
text_width = tile_head_text.node().getBBox().width;
tile_head_text.attr("x", tile_head_x + (head_box_width / 2.0) - (text_width/2.0))

var development_card_head_x = tile_head_x + head_box_width + dist_between_heads;
var development_card_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", development_card_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var development_card_head_text = g_action_head.append("text").text("Development Card").attr("x", development_card_head_x + 5).attr("y", head_box_y+29).attr("class", "head_text")
text_width = development_card_head_text.node().getBBox().width;
development_card_head_text.attr("x", development_card_head_x + (head_box_width/2.0)-(text_width/2.0));

var respond_head_x = development_card_head_x + head_box_width + dist_between_heads;
var respond_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", respond_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var respond_head_text = g_action_head.append("text").text("Accept/Reject Deal").attr("x", respond_head_x + 5).attr("y", head_box_y+29).attr("class", "head_text")
text_width = respond_head_text.node().getBBox().width;
respond_head_text.attr("x", respond_head_x + (head_box_width/2.0)-(text_width/2.0));

var choose_player_head_x = respond_head_x + head_box_width + dist_between_heads;
var choose_player_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", choose_player_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var choose_player_head_text = g_action_head.append("text").text("Choose Player").attr("x", choose_player_head_x + 17).attr("y", head_box_y+29).attr("class", "head_text")
text_width = choose_player_head_text.node().getBBox().width;
choose_player_head_text.attr("x", choose_player_head_x + (head_box_width/2.0)-(text_width/2.0));

var res1_head_x = choose_player_head_x + head_box_width + dist_between_heads;
var res1_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", res1_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var res1_head_text = g_action_head.append("text").text("Resource 1").attr("x", res1_head_x + 27).attr("y", head_box_y+29).attr("class", "head_text")
text_width = res1_head_text.node().getBBox().width;
res1_head_text.attr("x", res1_head_x + (head_box_width/2.0)-(text_width/2.0));


var res2_head_x = res1_head_x + head_box_width + dist_between_heads;
var res2_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", res2_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var res2_head_text = g_action_head.append("text").text("Resource 2").attr("x", res2_head_x + 27).attr("y", head_box_y+29).attr("class", "head_text")
text_width = res2_head_text.node().getBBox().width;
res2_head_text.attr("x", res2_head_x + (head_box_width/2.0)-(text_width/2.0));

var prop_trade_to_give_head_x = res2_head_x + head_box_width + dist_between_heads;
var prop_trade_to_give_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", prop_trade_to_give_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var prop_trade_to_give_head_text = g_action_head.append("text").text("Trade: To Give").attr("x", prop_trade_to_give_head_x + 15).attr("y", head_box_y+29).attr("class", "head_text").attr("width", head_box_width)
text_width = prop_trade_to_give_head_text.node().getBBox().width;
prop_trade_to_give_head_text.attr("x", prop_trade_to_give_head_x + (head_box_width/2.0)-(text_width/2.0));

var prop_trade_to_receive_head_x = prop_trade_to_give_head_x + 1.5*head_box_width + dist_between_heads;
var prop_trade_to_receive_head = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("x", prop_trade_to_receive_head_x).attr("y", head_box_y).attr("width", head_box_width).attr("height", head_box_height).attr("class", "action_head_rect_active");
var prop_trade_to_receive_head_text = g_action_head.append("text").text("Trade: To Receive").attr("x", prop_trade_to_receive_head_x + 8).attr("y", head_box_y+29).attr("class", "head_text").attr("width", head_box_width)
text_width = prop_trade_to_receive_head_text.node().getBBox().width;
prop_trade_to_receive_head_text.attr("x", prop_trade_to_receive_head_x + (head_box_width/2.0)-(text_width/2.0));


/*
mask rectangles
*/
var mask_rect_width = 90;
var mask_rect_height = 20;
var vert_height_between_mask_rects = 0;
frac_across = 1.2

//type mask
var type_mask_x = action_type_head_x + (frac_across) * head_box_width;
var mask_y_start = head_box_y - 24;

var type_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", type_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var type_mask_text = g_action_head.append("text").text("Type mask").attr("x", type_mask_x+21).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = type_mask_text.node().getBBox().width;
type_mask_text.attr("x", type_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)


//corner masks
var corner_mask_x = corner_head_x + (frac_across) * head_box_width;

var settlement_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", corner_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var settlement_mask_text = g_action_head.append("text").text("Settlement Mask").attr("x", corner_mask_x+9).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = settlement_mask_text.node().getBBox().width;
settlement_mask_text.attr("x", corner_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)
var city_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", corner_mask_x).attr("y", mask_y_start - (mask_rect_height + vert_height_between_mask_rects)).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var city_mask_text = g_action_head.append("text").text("City Mask").attr("x", corner_mask_x+23).attr("y", mask_y_start+13 - (mask_rect_height + vert_height_between_mask_rects)).attr("class", "mask_text")
text_width = city_mask_text.node().getBBox().width;
city_mask_text.attr("x", corner_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)
var dummy_corner_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", corner_mask_x).attr("y", mask_y_start - (2*mask_rect_height + vert_height_between_mask_rects)).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var dummy_corner_mask_text = g_action_head.append("text").text("Dummy Mask").attr("x", corner_mask_x+21).attr("y", mask_y_start+13 - (2*mask_rect_height + vert_height_between_mask_rects)).attr("class", "mask_text")
text_width = dummy_corner_mask_text.node().getBBox().width;
dummy_corner_mask_text.attr("x", corner_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)

//edge masks
var edge_mask_x = edge_head_x + (frac_across) * head_box_width

var road_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", edge_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var road_mask_text = g_action_head.append("text").text("Road Mask").attr("x", edge_mask_x + 21).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = road_mask_text.node().getBBox().width;
road_mask_text.attr("x", edge_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)

//tile masks
var tile_mask_x = tile_head_x + (frac_across) * head_box_width

var move_robber_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", tile_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var move_robber_mask_text = g_action_head.append("text").text("Move Robber Mask").attr("x", tile_mask_x + 3).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = move_robber_mask_text.node().getBBox().width;
move_robber_mask_text.attr("x", tile_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)

//devcard mask
var devcard_mask_x = development_card_head_x + (frac_across) * head_box_width

var devcard_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", devcard_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var devcard_mask_text = g_action_head.append("text").text("DevCard Mask").attr("x", devcard_mask_x + 13).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = devcard_mask_text.node().getBBox().width;
devcard_mask_text.attr("x", devcard_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)


//response mask
var response_mask_x = respond_head_x + (frac_across) * head_box_width

var response_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", response_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var response_mask_text = g_action_head.append("text").text("Response Mask").attr("x", response_mask_x + 13).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = response_mask_text.node().getBBox().width;
response_mask_text.attr("x", response_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)

//player mask
var player_mask_x = choose_player_head_x + (frac_across) * head_box_width

var player_dummy_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", player_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var player_dummy_mask_text = g_action_head.append("text").text("Dummy Mask").attr("x", player_mask_x + 18).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = player_dummy_mask_text.node().getBBox().width;
player_dummy_mask_text.attr("x", player_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)
var player_steal_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", player_mask_x).attr("y", mask_y_start - (mask_rect_height + vert_height_between_mask_rects)).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var player_steal_mask_text = g_action_head.append("text").text("Steal From Mask").attr("x", player_mask_x+8).attr("y", mask_y_start+13 - (mask_rect_height + vert_height_between_mask_rects)).attr("class", "mask_text")
text_width = player_steal_mask_text.node().getBBox().width;
player_steal_mask_text.attr("x", player_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)

//res 1 masks
var res1_mask_x = res1_head_x + (frac_across) * head_box_width

var res1_exchange_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", res1_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var res1_exchange_mask_text = g_action_head.append("text").text("Exchange Mask").attr("x", res1_mask_x + 11).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = res1_exchange_mask_text.node().getBBox().width;
res1_exchange_mask_text.attr("x", res1_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)
var res1_monopoly_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", res1_mask_x).attr("y", mask_y_start - (mask_rect_height + vert_height_between_mask_rects)).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var res1_monopoly_mask_text = g_action_head.append("text").text("Monopoly Mask").attr("x", res1_mask_x+10).attr("y", mask_y_start+13 - (mask_rect_height + vert_height_between_mask_rects)).attr("class", "mask_text")
text_width = res1_monopoly_mask_text.node().getBBox().width;
res1_monopoly_mask_text.attr("x", res1_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)
var res1_yop_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", res1_mask_x).attr("y", mask_y_start - (2*mask_rect_height + vert_height_between_mask_rects)).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var res1_yop_mask_text = g_action_head.append("text").text("Year of Plenty Mask").attr("x", res1_mask_x+3).attr("y", mask_y_start+13 - (2*mask_rect_height + vert_height_between_mask_rects)).attr("class", "mask_text")
text_width = res1_yop_mask_text.node().getBBox().width;
res1_yop_mask_text.attr("x", res1_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)
var res1_dummy_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", res1_mask_x).attr("y", mask_y_start - (3*mask_rect_height + vert_height_between_mask_rects)).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var res1_dummy_mask_text = g_action_head.append("text").text("Dummy Mask").attr("x", res1_mask_x+18).attr("y", mask_y_start+13 - (3*mask_rect_height + vert_height_between_mask_rects)).attr("class", "mask_text")
text_width = res1_dummy_mask_text.node().getBBox().width;
res1_dummy_mask_text.attr("x", res1_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)

//res 2 mask
var res2_mask_x = res2_head_x + (frac_across) * head_box_width

var res2_inbank_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", res2_mask_x).attr("y", mask_y_start).attr("width", mask_rect_width).attr("height", mask_rect_height).attr("class", "inactive_mask")
var res2_inbank_mask_text = g_action_head.append("text").text("In Bank Mask").attr("x", res2_mask_x + 16).attr("y", mask_y_start+13).attr("class", "mask_text")
text_width = res2_inbank_mask_text.node().getBBox().width;
res2_inbank_mask_text.attr("x", res2_mask_x + (mask_rect_width / 2.0) - text_width / 2.0)


//prop give mask
var prop_give_mask_x = prop_trade_to_give_head_x + frac_across * head_box_width
var prop_give_width = 1.5 * mask_rect_width;
var prop_give_y = mask_y_start - mask_rect_height;
var prop_give_mask = g_action_head.append("rect").attr("rx", 5).attr("ry", 5).attr("x", prop_give_mask_x).attr("y", prop_give_y).attr("width", prop_give_width).attr("height", 2*mask_rect_height).attr("class", "inactive_mask")
gap_between_res = 1;
res_img_width = (prop_give_width - (6*gap_between_res)) / 5.0
res_img_height = mask_rect_height - 5;
res_images = ["images/resources/wood.png", "images/resources/brick.png", "images/resources/sheep.png", 
"images/resources/wheat.png", "images/resources/ore.png"]

for(i=0; i<5; i++) {
	g_action_head.append("svg:image").attr("x", prop_give_mask_x + gap_between_res*(i+1) + res_img_width * i).attr("y", prop_give_y + 5).attr("width", res_img_width).attr("height", res_img_height).attr("xlink:href", res_images[i])
}



/*
Logits
*/
var logit_size = 11;
var action_logit_x_start = 75;
var action_logit_y = 200;

var action_logits = [];
for (i = 0; i < 12; i++) {
	action_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", action_logit_x_start + i * logit_size).attr("y", action_logit_y).attr("class", "logit"))
}

var action_logit_crosses_1 = [];
var action_logit_crosses_2 = [];
for (i=0; i<12; i++) {
	action_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(action_logits[i].attr("x"))).attr("x2", parseInt(action_logits[i].attr("x")) + logit_size).attr("y1", parseInt(action_logits[i].attr("y"))).attr("y2", parseInt(action_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	action_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(action_logits[i].attr("x")) + logit_size).attr("x2", parseInt(action_logits[i].attr("x"))).attr("y1", parseInt(action_logits[i].attr("y"))).attr("y2", parseInt(action_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var type_logits = [];
for(i=0; i<12; i++) {
	type_logits.push(0.0)
}





//CORNER/EDGE logit drawing
var edge_length = 27;
var horz_edge_diff = (Math.sqrt(3) / 2.0) * edge_length;
var vert_edge_diff = edge_length / 2.0
var relative_edge_positions = {
	"1": [0.0, 0.0]
}
relative_edge_positions["2"] = [relative_edge_positions["1"][0] + horz_edge_diff, relative_edge_positions["1"][1] - vert_edge_diff];
relative_edge_positions["3"] = [relative_edge_positions["1"][0] + 2 * horz_edge_diff, relative_edge_positions["1"][1]];
relative_edge_positions["4"] = [relative_edge_positions["2"][0] + 2 * horz_edge_diff, relative_edge_positions["2"][1]];
relative_edge_positions["5"] = [relative_edge_positions["3"][0] + 2 * horz_edge_diff, relative_edge_positions["3"][1]];
relative_edge_positions["6"] = [relative_edge_positions["1"][0], relative_edge_positions["1"][1] + edge_length];
relative_edge_positions["7"] = [relative_edge_positions["6"][0] + horz_edge_diff, relative_edge_positions["6"][1] + vert_edge_diff];
relative_edge_positions["8"] = [relative_edge_positions["6"][0] + 2 * horz_edge_diff, relative_edge_positions["6"][1]];
relative_edge_positions["9"] = [relative_edge_positions["7"][0] + 2 * horz_edge_diff, relative_edge_positions["7"][1]];
relative_edge_positions["10"] = [relative_edge_positions["8"][0] + 2 * horz_edge_diff, relative_edge_positions["8"][1]];
relative_edge_positions["11"] = [relative_edge_positions["7"][0] - 2 * horz_edge_diff, relative_edge_positions["7"][1]];
relative_edge_positions["12"] = [relative_edge_positions["11"][0], relative_edge_positions["11"][1] + edge_length];
relative_edge_positions["13"] = [relative_edge_positions["12"][0] + horz_edge_diff, relative_edge_positions["12"][1] + vert_edge_diff];
relative_edge_positions["14"] = [relative_edge_positions["12"][0] + 2 * horz_edge_diff, relative_edge_positions["12"][1]];
relative_edge_positions["15"] = [relative_edge_positions["13"][0] + 2 * horz_edge_diff, relative_edge_positions["13"][1]];
relative_edge_positions["16"] = [relative_edge_positions["14"][0] + 2 * horz_edge_diff, relative_edge_positions["14"][1]];
relative_edge_positions["17"] = [relative_edge_positions["9"][0] + 2 * horz_edge_diff, relative_edge_positions["9"][1]];
relative_edge_positions["18"] = [relative_edge_positions["16"][0] + 2 * horz_edge_diff, relative_edge_positions["16"][1]];
relative_edge_positions["19"] = [relative_edge_positions["15"][0] + 2 * horz_edge_diff, relative_edge_positions["15"][1]];
relative_edge_positions["20"] = [relative_edge_positions["13"][0], relative_edge_positions["13"][1] + edge_length];
relative_edge_positions["21"] = [relative_edge_positions["20"][0] + horz_edge_diff, relative_edge_positions["20"][1] + vert_edge_diff];
relative_edge_positions["22"] = [relative_edge_positions["20"][0] + 2 * horz_edge_diff, relative_edge_positions["20"][1]];
relative_edge_positions["23"] = [relative_edge_positions["21"][0] + 2 * horz_edge_diff, relative_edge_positions["21"][1]];
relative_edge_positions["24"] = [relative_edge_positions["22"][0] + 2 * horz_edge_diff, relative_edge_positions["22"][1]];

var edge_inds = [
	[1, 2],
	[2, 3],
	[3, 4],
	[4, 5],
	[5, 10],
	[10, 17],
	[17, 18],
	[18, 19],
	[19, 24],
	[23, 24],
	[22, 23],
	[21, 22],
	[20, 21],
	[13, 20],
	[12, 13],
	[11, 12],
	[6, 11],
	[1, 6],
	[6, 7],
	[7, 8],
	[3, 8],
	[8, 9],
	[9, 10],
	[7, 14],
	[13, 14],
	[14, 15],
	[15, 16],
	[9, 16],
	[16, 19],
	[15, 22]
]

var corner_start_pos = [corner_head_x + 15, head_box_y - 180];

var corner_logits = [];
var dummy_corner_logits = [];

for(i=1; i<31; i++) {
		ind1 = String(edge_inds[i-1][0])
		ind2 = String(edge_inds[i-1][1])
		g_action_head.append("line").attr("x1", corner_start_pos[0] + relative_edge_positions[ind1][0] + logit_size / 2.0).attr("y1", corner_start_pos[1] + relative_edge_positions[ind1][1] + logit_size / 2.0).attr("x2", corner_start_pos[0] + relative_edge_positions[ind2][0] + logit_size / 2.0).attr("y2", corner_start_pos[1] + relative_edge_positions[ind2][1] + logit_size / 2.0).attr("class", "corner_logit_lines").style("opacity", 0.0)
	}
d3.selectAll(".corner_logit_lines").style("opacity", 0.4)

for (i = 1; i < 25; i++) {
	ind = String(i)
	dummy_corner_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", corner_start_pos[0] + relative_edge_positions[ind][0]).attr("y", corner_start_pos[1] + relative_edge_positions[ind][1]).attr("class", "logit").style("fill", "white").style("stroke-width", "0"));
	corner_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", corner_start_pos[0] + relative_edge_positions[ind][0]).attr("y", corner_start_pos[1] + relative_edge_positions[ind][1]).attr("class", "logit"));
}

var corner_logit_crosses_1 = [];
var corner_logit_crosses_2 = [];
for (i=0; i<24; i++) {
	corner_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(corner_logits[i].attr("x"))).attr("x2", parseInt(corner_logits[i].attr("x")) + logit_size).attr("y1", parseInt(corner_logits[i].attr("y"))).attr("y2", parseInt(corner_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	corner_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(corner_logits[i].attr("x")) + logit_size).attr("x2", parseInt(corner_logits[i].attr("x"))).attr("y1", parseInt(corner_logits[i].attr("y"))).attr("y2", parseInt(corner_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var corner_logits_vals = [];
for(i=0; i<24; i++) {
	corner_logits_vals.push(0.0)
}




var edge_start_pos = [edge_head_x + 15, head_box_y - 180];

var edge_logits = [];
var dummy_edge_logits = [];
var edge_logit_crosses_1 = [];
var edge_logit_crosses_2 = [];

for(i=1; i<31; i++) {
		ind1 = String(edge_inds[i-1][0])
		ind2 = String(edge_inds[i-1][1])
		g_action_head.append("line").attr("x1", edge_start_pos[0] + relative_edge_positions[ind1][0] + logit_size / 2.0).attr("y1", edge_start_pos[1] + relative_edge_positions[ind1][1] + logit_size / 2.0).attr("x2", edge_start_pos[0] + relative_edge_positions[ind2][0] + logit_size / 2.0).attr("y2", edge_start_pos[1] + relative_edge_positions[ind2][1] + logit_size / 2.0).attr("class", "edge_logit_lines").style("opacity", 0.0)
	}

d3.selectAll(".edge_logit_lines").style("opacity", 0.4)

for(i=1; i<31; i++) {
	ind1 = String(edge_inds[i-1][0])
	ind2 = String(edge_inds[i-1][1])
	posm = [edge_start_pos[0] + (relative_edge_positions[ind1][0] + relative_edge_positions[ind2][0]) / 2.0, edge_start_pos[1] + (relative_edge_positions[ind1][1] + relative_edge_positions[ind2][1]) / 2.0]
	dummy_edge_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", posm[0]).attr("y", posm[1]).attr("class", "logit").style("fill", "white").style("stroke-width", "0"));
	edge_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", posm[0]).attr("y", posm[1]).attr("class", "logit"));
	edge_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", posm[0]).attr("x2", posm[0] + logit_size).attr("y1", posm[1]).attr("y2", posm[1] + logit_size).style("opacity", 0.0))
	edge_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", posm[0]).attr("x2", posm[0] + logit_size).attr("y1", posm[1] + logit_size).attr("y2", posm[1]).style("opacity", 0.0))
}


var edge_logits_vals = [];
for(i=0; i<30; i++) {
	corner_logits_vals.push(0.0)
}

function sampleEdgeLogitsInit() {
	logits = [];
	for(i=0; i < 30; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<30; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<30; i++) {
		edge_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}


//tile logits
var tile_start_pos = [tile_head_x + 15, head_box_y - 180];

var tile_logits = [];
var tile_logit_crosses_1 = [];
var tile_logit_crosses_2 = [];

var relative_tile_positions = [
	[relative_edge_positions["1"][0] + horz_edge_diff, relative_edge_positions["1"][1] + vert_edge_diff],
	[relative_edge_positions["3"][0] + horz_edge_diff, relative_edge_positions["3"][1] + vert_edge_diff],
	[relative_edge_positions["11"][0] + horz_edge_diff, relative_edge_positions["11"][1] + vert_edge_diff],
	[relative_edge_positions["7"][0] + horz_edge_diff, relative_edge_positions["7"][1] + vert_edge_diff],
	[relative_edge_positions["9"][0] + horz_edge_diff, relative_edge_positions["9"][1] + vert_edge_diff],
	[relative_edge_positions["13"][0] + horz_edge_diff, relative_edge_positions["13"][1] + vert_edge_diff],
	[relative_edge_positions["15"][0] + horz_edge_diff, relative_edge_positions["15"][1] + vert_edge_diff],
]

for(i=1; i<31; i++) {
		ind1 = String(edge_inds[i-1][0])
		ind2 = String(edge_inds[i-1][1])
		g_action_head.append("line").attr("x1", tile_start_pos[0] + relative_edge_positions[ind1][0] + logit_size / 2.0).attr("y1", tile_start_pos[1] + relative_edge_positions[ind1][1] + logit_size / 2.0).attr("x2", tile_start_pos[0] + relative_edge_positions[ind2][0] + logit_size / 2.0).attr("y2", tile_start_pos[1] + relative_edge_positions[ind2][1] + logit_size / 2.0).attr("class", "tile_logit_lines").style("opacity", 1.0)
	}
	d3.selectAll(".tile_logit_lines").style("opacity", 0.4)

for(i=0; i<7; i++) {
	x_pos = tile_start_pos[0] + relative_tile_positions[i][0]
	y_pos = tile_start_pos[1] + relative_tile_positions[i][1]
	tile_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", x_pos).attr("y", y_pos).attr("class", "logit"));
	tile_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", x_pos).attr("x2", x_pos + logit_size).attr("y1", y_pos).attr("y2", y_pos + logit_size).style("opacity", 0.0))
	tile_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", x_pos).attr("x2", x_pos + logit_size).attr("y1", y_pos + logit_size).attr("y2", y_pos).style("opacity", 0.0))
}

var tile_logits_vals = [];
for(i=0; i<7; i++) {
	tile_logits_vals.push(0.0)
}


// development card logits
var devcard_logit_x = development_card_head_x + 35;
var devcard_logit_y = action_logit_y;

var devcard_logits = [];
for (i = 0; i < 5; i++) {
	devcard_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", devcard_logit_x + i * logit_size).attr("y", devcard_logit_y).attr("class", "logit"))
}

var devcard_logit_crosses_1 = [];
var devcard_logit_crosses_2 = [];
for (i=0; i<5; i++) {
	devcard_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(devcard_logits[i].attr("x"))).attr("x2", parseInt(devcard_logits[i].attr("x")) + logit_size).attr("y1", parseInt(devcard_logits[i].attr("y"))).attr("y2", parseInt(devcard_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	devcard_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(devcard_logits[i].attr("x")) + logit_size).attr("x2", parseInt(devcard_logits[i].attr("x"))).attr("y1", parseInt(devcard_logits[i].attr("y"))).attr("y2", parseInt(devcard_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var devcard_logits_vals = [];
for(i=0; i<5; i++) {
	devcard_logits_vals.push(0.0)
}




//respond logits
var respond_logit_x = respond_head_x + 50
var respond_logit_y = action_logit_y

var respond_logits = []
for(i=0; i<2; i++) {
	respond_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", respond_logit_x + i * logit_size).attr("y", respond_logit_y).attr("class", "logit"))
}

var respond_logit_crosses_1 = [];
var respond_logit_crosses_2 = [];
for (i=0; i<2; i++) {
	respond_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(respond_logits[i].attr("x"))).attr("x2", parseInt(respond_logits[i].attr("x")) + logit_size).attr("y1", parseInt(respond_logits[i].attr("y"))).attr("y2", parseInt(respond_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	respond_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(respond_logits[i].attr("x")) + logit_size).attr("x2", parseInt(respond_logits[i].attr("x"))).attr("y1", parseInt(respond_logits[i].attr("y"))).attr("y2", parseInt(respond_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var respond_logits_vals = [];
for(i=0; i<2; i++) {
	respond_logits_vals.push(0.0)
}


//player logits/circles
var player_circle_radius = 15;
var player_circle_1_x = choose_player_head_x + 10;
var player_circle_1_y = head_box_y - 50;
g_action_head.append("circle").attr("cx", player_circle_1_x).attr("cy", player_circle_1_y).attr("r", player_circle_radius).attr("class", "player_circle").style("fill", "red")

var player_circle_2_x = choose_player_head_x + (head_box_width / 2.0);
var player_circle_2_y = player_circle_1_y - 60;
g_action_head.append("circle").attr("cx", player_circle_2_x).attr("cy", player_circle_2_y).attr("r", player_circle_radius).attr("class", "player_circle").style("fill", "blue")

var player_circle_3_x = choose_player_head_x + (head_box_width - 10);
var player_circle_3_y = player_circle_1_y;
g_action_head.append("circle").attr("cx", player_circle_3_x).attr("cy", player_circle_3_y).attr("r", player_circle_radius).attr("class", "player_circle").style("fill", "orange")

var dummy_player_logits = [];
var player_logits = [];
var player_logit_crosses_1 = [];
var player_logit_crosses_2 = [];

player_logit_1_x = player_circle_1_x - logit_size / 2.0
player_logit_1_y = player_circle_1_y - logit_size / 2.0
dummy_player_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", player_logit_1_x).attr("y", player_logit_1_y).attr("class", "logit").style("fill", "white"))
player_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", player_logit_1_x).attr("y", player_logit_1_y).attr("class", "logit"))
player_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", player_logit_1_x).attr("x2", player_logit_1_x + logit_size).attr("y1", player_logit_1_y).attr("y2", player_logit_1_y + logit_size).style("opacity", 0.0))
player_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", player_logit_1_x).attr("x2", player_logit_1_x + logit_size).attr("y1", player_logit_1_y + logit_size).attr("y2", player_logit_1_y).style("opacity", 0.0))

player_logit_2_x = player_circle_2_x - logit_size / 2.0
player_logit_2_y = player_circle_2_y - logit_size / 2.0
dummy_player_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", player_logit_2_x).attr("y", player_logit_2_y).attr("class", "logit").style("fill", "white"))
player_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", player_logit_2_x).attr("y", player_logit_2_y).attr("class", "logit"))
player_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", player_logit_2_x).attr("x2", player_logit_2_x + logit_size).attr("y1", player_logit_2_y).attr("y2", player_logit_2_y + logit_size).style("opacity", 0.0))
player_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", player_logit_2_x).attr("x2", player_logit_2_x + logit_size).attr("y1", player_logit_2_y + logit_size).attr("y2", player_logit_2_y).style("opacity", 0.0))


player_logit_3_x = player_circle_3_x - logit_size / 2.0
player_logit_3_y = player_circle_3_y - logit_size / 2.0
dummy_player_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", player_logit_3_x).attr("y", player_logit_3_y).attr("class", "logit").style("fill", "white"))
player_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", player_logit_3_x).attr("y", player_logit_3_y).attr("class", "logit"))
player_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", player_logit_3_x).attr("x2", player_logit_3_x + logit_size).attr("y1", player_logit_3_y).attr("y2", player_logit_3_y + logit_size).style("opacity", 0.0))
player_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", player_logit_3_x).attr("x2", player_logit_3_x + logit_size).attr("y1", player_logit_3_y + logit_size).attr("y2", player_logit_3_y).style("opacity", 0.0))

//text
g_action_head.append("text").text("CW+1").attr("x", player_logit_1_x - 10).attr("y", player_logit_1_y - 1 * player_circle_radius).attr("class", "playercircle_text")
g_action_head.append("text").text("CW+2").attr("x", player_logit_2_x - 10).attr("y", player_logit_2_y - 1 * player_circle_radius).attr("class", "playercircle_text")
g_action_head.append("text").text("CW+3").attr("x", player_logit_3_x - 10).attr("y", player_logit_3_y - 1 * player_circle_radius).attr("class", "playercircle_text")

var player_logits_vals = [];
for(i=0; i<3; i++) {
	player_logits_vals.push(0.0)
}



//resource 1 logits
var res1_logit_x = res1_head_x + 35;
var res1_logit_y = action_logit_y;

var res1_logits = [];
for (i = 0; i < 5; i++) {
	res1_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", res1_logit_x + i * logit_size).attr("y", res1_logit_y).attr("class", "logit"))
}

var res1_logit_crosses_1 = [];
var res1_logit_crosses_2 = [];
for (i=0; i<5; i++) {
	res1_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(res1_logits[i].attr("x"))).attr("x2", parseInt(res1_logits[i].attr("x")) + logit_size).attr("y1", parseInt(res1_logits[i].attr("y"))).attr("y2", parseInt(res1_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	res1_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(res1_logits[i].attr("x")) + logit_size).attr("x2", parseInt(res1_logits[i].attr("x"))).attr("y1", parseInt(res1_logits[i].attr("y"))).attr("y2", parseInt(res1_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var res1_logits_vals = [];
for(i=0; i<5; i++) {
	res1_logits_vals.push(0.0)
}



//resource 2 logits
var res2_logit_x = res2_head_x + 35;
var res2_logit_y = action_logit_y;

var res2_logits = [];
for (i = 0; i < 5; i++) {
	res2_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", res2_logit_x + i * logit_size).attr("y", res2_logit_y).attr("class", "logit"))
}

var res2_logit_crosses_1 = [];
var res2_logit_crosses_2 = [];
for (i=0; i<5; i++) {
	res2_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(res2_logits[i].attr("x"))).attr("x2", parseInt(res2_logits[i].attr("x")) + logit_size).attr("y1", parseInt(res2_logits[i].attr("y"))).attr("y2", parseInt(res2_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	res2_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(res2_logits[i].attr("x")) + logit_size).attr("x2", parseInt(res2_logits[i].attr("x"))).attr("y1", parseInt(res2_logits[i].attr("y"))).attr("y2", parseInt(res2_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var res2_logits_vals = [];
for(i=0; i<5; i++) {
	res2_logits_vals.push(0.0)
}





//prop give logits
var prop_give_logit_x = prop_trade_to_give_head_x + 29;
var prop_give_logit_y = action_logit_y;

var prop_give_logits = [];
for (i = 0; i < 6; i++) {
	prop_give_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", prop_give_logit_x + i * logit_size).attr("y", prop_give_logit_y).attr("class", "logit"))
}

var prop_give_logit_crosses_1 = [];
var prop_give_logit_crosses_2 = [];
for (i=0; i<6; i++) {
	prop_give_logit_crosses_1.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(prop_give_logits[i].attr("x"))).attr("x2", parseInt(prop_give_logits[i].attr("x")) + logit_size).attr("y1", parseInt(prop_give_logits[i].attr("y"))).attr("y2", parseInt(prop_give_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
	prop_give_logit_crosses_2.push(g_action_head.append("line").style("stroke", "red").attr("x1", parseInt(prop_give_logits[i].attr("x")) + logit_size).attr("x2", parseInt(prop_give_logits[i].attr("x"))).attr("y1", parseInt(prop_give_logits[i].attr("y"))).attr("y2", parseInt(prop_give_logits[i].attr("y")) + logit_size).style("opacity", 0.0))
}

var prop_give_logits_vals = [];
for(i=0; i<6; i++) {
	prop_give_logits_vals.push(0.0)
}




//prop rec logits
//prop give logits
var prop_rec_logit_x = prop_trade_to_receive_head_x + 29;
var prop_rec_logit_y = action_logit_y;

var prop_rec_logits = [];
for (i = 0; i < 6; i++) {
	prop_rec_logits.push(g_action_head.append("rect").attr("width", logit_size).attr("height", logit_size).attr("x", prop_rec_logit_x + i * logit_size).attr("y", prop_rec_logit_y).attr("class", "logit"))
}

var prop_rec_logits_vals = [];
for(i=0; i<6; i++) {
	prop_rec_logits_vals.push(0.0)
}



/*
Actual action masks
*/
var action_masks = {
	"action_type": [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
}





/*
Action outputs
*/
var action_out_width = 120;
var action_out_height = 0.8 * head_box_height;

var action_type_output_x = action_type_head_x;
var action_output_y = 10;

var action_type_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", action_type_output_x).attr("y", action_output_y).attr("class", "action_output")


var corner_output_x = corner_head_x;
var corner_output_y = action_output_y;

var corner_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", corner_output_x).attr("y", corner_output_y).attr("class", "action_output")


var edge_output_x = edge_head_x;
var edge_output_y = action_output_y;

var edge_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", edge_output_x).attr("y", edge_output_y).attr("class", "action_output")


var tile_output_x = tile_head_x;
var tile_output_y = action_output_y;

var tile_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", tile_output_x).attr("y", tile_output_y).attr("class", "action_output")


var devcard_output_x = development_card_head_x;
var devcard_output_y = action_output_y;

var devcard_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", devcard_output_x).attr("y", devcard_output_y).attr("class", "action_output")


var respond_output_x = respond_head_x;
var respond_output_y = action_output_y;

var respond_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", respond_output_x).attr("y", respond_output_y).attr("class", "action_output")


var player_output_x = choose_player_head_x;
var player_output_y = action_output_y;

var player_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", player_output_x).attr("y", player_output_y).attr("class", "action_output")


var res1_output_x = res1_head_x;
var res1_output_y = action_output_y;

var res1_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", res1_output_x).attr("y", res1_output_y).attr("class", "action_output")


var res2_output_x = res2_head_x;
var res2_output_y = action_output_y;

var res2_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width).attr("height", action_out_height).attr("x", res2_output_x).attr("y", res2_output_y).attr("class", "action_output")


var prop_give_output_x = prop_trade_to_give_head_x-12;
var prop_give_output_y = action_output_y;

var prop_give_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width+24).attr("height", action_out_height).attr("x", prop_give_output_x).attr("y", prop_give_output_y).attr("class", "action_output")


var prop_rec_output_x = prop_trade_to_receive_head_x-12;
var prop_rec_output_y = action_output_y;

var prop_rec_output = g_action_head.append("rect").attr("rx", 10).attr("ry", 10).attr("width", action_out_width+24).attr("height", action_out_height).attr("x", prop_rec_output_x).attr("y", prop_rec_output_y).attr("class", "action_output")










/*
Paths
*/

function getPathStringFromPoints(points) {
	path = "M "
	for (i=0; i<(points.length-1); i++) {
		path += points[i][0] + ", " + points[i][1] + " L "
	}
	path += points[points.length-1][0] + ", " + points[points.length-1][1];
	return path
}

//lstm to type head
var points = [
	[lstm_output_box_x + (lstm_output_box_width / 2.0), lstm_output_box_y],
];
points.push(points[0].map((x) => x));
points[1][1] = points[1][1] - 25;
points.push([action_type_head_x + (head_box_width / 2.0), points[1][1]])
points.push([points[2][0], head_box_y + head_box_height])

var path_lstm_to_type = g_action_head.append("path").attr("d", getPathStringFromPoints(points)).attr("class", "active_path").attr("id", "lstm_to_type");
var path_lstm_to_type_length = path_lstm_to_type.node().getTotalLength();
// d3.select("#lstm_to_type").style('opacity', 0);

//path from type head to type logits
var points_2 = [
	[action_type_head_x + (head_box_width / 2.0), head_box_y],
	[action_type_head_x + (head_box_width / 2.0), action_logit_y + logit_size]
]
var path_type_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_2)).attr("class", "active_path").attr("id", "type_to_logits");
var path_type_to_logits_length = path_type_to_logits.node().getTotalLength();
// d3.select("#type_to_logits").style("opacity", 0);

//path from type mask to type logits
var points_3 = [
	[type_mask_x + (mask_rect_width / 2.0), mask_y_start],
	[type_mask_x + (mask_rect_width / 2.0), (mask_y_start + action_logit_y + logit_size) / 2.0],
	[action_type_head_x + 6.5 * logit_size, (mask_y_start + action_logit_y + logit_size) / 2.0],
	[action_type_head_x + 6.5 * logit_size, action_logit_y + logit_size]
];
var path_type_masks_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_3)).attr("class", "active_path").attr("id", "type_mask_to_logits")
var path_type_masks_to_logits_length = path_type_masks_to_logits.node().getTotalLength()
// d3.select("#type_mask_to_logits").style("opacity", 0);

//logits to type output
var points_5 = [
	[action_type_head_x + (head_box_width / 2.0), action_logit_y],
	[action_type_head_x + (head_box_width / 2.0), action_output_y + action_out_height]
]
var path_type_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_5)).attr("class", "active_path").attr("id", "type_logits_to_output")
var path_type_logits_to_output_length = path_type_logits_to_output.node().getTotalLength()
// d3.select("#type_logits_to_output").style("opacity", 0);


//type_output_to_corner
var points_from_type_output = [
	[action_type_head_x + (head_box_width / 2.0), action_output_y],
	[action_type_head_x + (head_box_width / 2.0), action_output_y - 8],
	[type_mask_x + mask_rect_width - 70, action_output_y-8],
	[type_mask_x + mask_rect_width - 70, action_logit_y],
	[(type_mask_x + mask_rect_width + corner_head_x) / 2.0, action_logit_y],
	[(type_mask_x + mask_rect_width + corner_head_x) / 2.0, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[corner_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[corner_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_corner = g_action_head.append("path").attr("d", getPathStringFromPoints(points_from_type_output)).attr("class", "active_path").attr("id", "type_output_to_corner_head")
var path_type_output_to_corner_length = path_type_output_to_corner.node().getTotalLength();


//type output to corner output
var points_type_output_to_corner_output = [
	points_from_type_output[2],
	[corner_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[corner_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_corner_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_corner_output)).attr("class", "active_path").attr("id", "type_output_to_corner_output")
var path_type_output_to_corner_output_length = path_type_output_to_corner_output.node().getTotalLength();



//extend type output to corner mask
var points_type_output_to_corner_mask = [
	points_from_type_output[6],
	[corner_mask_x + mask_rect_width/2.0, points_from_type_output[6][1]],
	[corner_mask_x + mask_rect_width/2.0, mask_y_start + mask_rect_height]
]
var path_output_to_corner_mask = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_corner_mask)).attr("class", "active_path").attr("id", "type_output_to_corner_mask");
var path_output_to_corner_mask_length = path_output_to_corner_mask.node().getTotalLength();


// lstm to corner head
var points_extend_input_to_corner = [
	[corner_head_x + (head_box_width / 2.0), points[0][1]-25],
	[corner_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_corner = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_corner)).attr("class", "active_path").attr("id", "lstm_to_corner");
var path_lstm_to_corner_length = path_lstm_to_corner.node().getTotalLength();



//corner head to logits
var points_corner_head_to_logits = [
	[corner_head_x + (head_box_width / 2.0), head_box_y],
	[corner_head_x + (head_box_width / 2.0), mask_y_start - 1.5 * mask_rect_height]
]
var path_corner_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_corner_head_to_logits)).attr("class", "active_path").attr("id", "corner_to_logits")
var path_corner_to_logits_length = path_corner_to_logits.node().getTotalLength();


// settlement mask to logits
var points_settlement_mask_to_logits = [
	[corner_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[corner_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[corner_head_x + 0.6 * head_box_width, mask_y_start - 1.5 * mask_rect_height]
]
var path_settlement_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_settlement_mask_to_logits)).attr("class", "active_path").attr("id", "settlement_mask_to_logits")
var path_settlement_mask_to_logits_length = path_settlement_mask_to_logits.node().getTotalLength();



// city mask to logits
var points_city_mask_to_logits = [
	[corner_mask_x, mask_y_start - 0.5 * mask_rect_height],
	[corner_head_x + 0.6 * head_box_width, mask_y_start - 0.5 * mask_rect_height],
	[corner_head_x + 0.6 * head_box_width, mask_y_start - 1.5 * mask_rect_height]
]
var path_city_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_city_mask_to_logits)).attr("class", "active_path").attr("id", "city_mask_to_logits")
var path_city_mask_to_logits_length = path_city_mask_to_logits.node().getTotalLength();




//corner dummy mask to logits
var points_corner_dummy_to_logits = [
	[corner_mask_x, mask_y_start - 1.5 * mask_rect_height],
	[corner_mask_x - 20, mask_y_start - 1.5 * mask_rect_height],
	[corner_mask_x - 20, mask_y_start + 0.5 * mask_rect_height],
	[corner_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[corner_head_x + 0.6 * head_box_width, mask_y_start - 1.5 * mask_rect_height]
]
var path_dummy_corner_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_corner_dummy_to_logits)).attr("class", "active_path").attr("id", "dummy_corner_mask_to_logits")
var path_dummy_corner_mask_to_logits_length = path_dummy_corner_mask_to_logits.node().getTotalLength();


//corner logits to output
var points_corner_logits_to_output = [
	[corner_head_x + (head_box_width / 2.0), action_output_y + action_out_height + 30],
	[corner_head_x + (head_box_width / 2.0), action_output_y + action_out_height]
]
var path_corner_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_corner_logits_to_output)).attr("class", "active_path").attr("id", "corner_logits_to_output")
var path_corner_logits_to_output_length = path_corner_logits_to_output.node().getTotalLength();




// lstm to edge head
var points_extend_input_to_edge = [
	[edge_head_x + (head_box_width / 2.0), points[1][1]],
	[edge_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_edge = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_edge)).attr("class", "active_path").attr("id", "lstm_to_edge");
var path_lstm_to_edge_length = path_lstm_to_edge.node().getTotalLength();

//type_output_extend_to_edge
var points_type_output_to_edge = [
	[corner_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[edge_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[edge_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_edge = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_edge)).attr("class", "active_path").attr("id", "type_output_to_edge_head")
var path_type_output_to_edge_length = path_type_output_to_edge.node().getTotalLength();


//type output to edge output
var points_type_output_to_edge_output = [
	points_type_output_to_corner_output[1],
	[edge_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[edge_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_edge_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_edge_output)).attr("class", "active_path").attr("id", "type_output_to_edge_output")
var path_type_output_to_edge_output_length = path_type_output_to_edge_output.node().getTotalLength();



//edge head to logits
var points_edge_head_to_logits = [
	[edge_head_x + (head_box_width / 2.0), head_box_y],
	[edge_head_x + (head_box_width / 2.0), mask_y_start - 1.2 * mask_rect_height]
]
var path_edge_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_edge_head_to_logits)).attr("class", "active_path").attr("id", "edge_to_logits")
var path_edge_to_logits_length = path_edge_to_logits.node().getTotalLength();


// road mask to logits
var points_road_mask_to_logits = [
	[edge_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[edge_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[edge_head_x + 0.6 * head_box_width, mask_y_start - 1.2 * mask_rect_height]
]
var path_road_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_road_mask_to_logits)).attr("class", "active_path").attr("id", "road_mask_to_logits")
var path_road_mask_to_logits_length = path_road_mask_to_logits.node().getTotalLength();


//edge logits to output
var points_edge_logits_to_output = [
	[edge_head_x + (head_box_width / 2.0), action_output_y + action_out_height + 30],
	[edge_head_x + (head_box_width / 2.0), action_output_y + action_out_height]
]
var path_edge_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_edge_logits_to_output)).attr("class", "active_path").attr("id", "edge_logits_to_output")
var path_edge_logits_to_output_length = path_edge_logits_to_output.node().getTotalLength();




// lstm to tile head
var points_extend_input_to_tile = [
	[tile_head_x + (head_box_width / 2.0), points[1][1]],
	[tile_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_tile = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_tile)).attr("class", "active_path").attr("id", "lstm_to_tile");
var path_lstm_to_tile_length = path_lstm_to_tile.node().getTotalLength();
// d3.select("#lstm_to_tile").style("opacity", 0);

//type_output_extend_to_tile
var points_type_output_to_tile = [
	[edge_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[tile_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[tile_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_tile = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_tile)).attr("class", "active_path").attr("id", "type_output_to_tile_head")
var path_type_output_to_tile_length = path_type_output_to_tile.node().getTotalLength();


//type output to tile output
var points_type_output_to_tile_output = [
	points_type_output_to_edge_output[1],
	[tile_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[tile_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_tile_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_tile_output)).attr("class", "active_path").attr("id", "type_output_to_tile_output")
var path_type_output_to_tile_output_length = path_type_output_to_tile_output.node().getTotalLength();


//tile head to logits
var points_tile_head_to_logits = [
	[tile_head_x + (head_box_width / 2.0), head_box_y],
	[tile_head_x + (head_box_width / 2.0), mask_y_start - 1.2 * mask_rect_height]
]
var path_tile_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_tile_head_to_logits)).attr("class", "active_path").attr("id", "tile_to_logits")
var path_tile_to_logits_length = path_tile_to_logits.node().getTotalLength();


// move robber mask to logits
var points_move_robber_mask_to_logits = [
	[tile_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[tile_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[tile_head_x + 0.6 * head_box_width, mask_y_start - 1.2 * mask_rect_height]
]
var path_move_robber_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_move_robber_mask_to_logits)).attr("class", "active_path").attr("id", "move_robber_mask_to_logits")
var path_move_robber_mask_to_logits_length = path_move_robber_mask_to_logits.node().getTotalLength();


//tile logits to output
var points_tile_logits_to_output = [
	[tile_head_x + (head_box_width / 2.0), action_output_y + action_out_height + 30],
	[tile_head_x + (head_box_width / 2.0), action_output_y + action_out_height]
]
var path_tile_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_tile_logits_to_output)).attr("class", "active_path").attr("id", "tile_logits_to_output")
var path_tile_logits_to_output_length = path_tile_logits_to_output.node().getTotalLength();








//lstm to dev card head
var points_extend_input_to_devcard = [
	[points[1][0], points[1][1]],
	[development_card_head_x + (head_box_width / 2.0), points[1][1]],
	[development_card_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_devcard = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_devcard)).attr("class", "active_path").attr("id", "lstm_to_devcard");
var path_lstm_to_devcard_length = path_lstm_to_devcard.node().getTotalLength();
// d3.select("#lstm_to_devcard").style("opacity", 0);


//type_output_extend_to_devcard
var points_type_output_to_devcard = [
	[tile_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[development_card_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[development_card_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_devcard = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_devcard)).attr("class", "active_path").attr("id", "type_output_to_devcard_head")
var path_type_output_to_devcard_length = path_type_output_to_devcard.node().getTotalLength();


//type output to devcard output
var points_type_output_to_devcard_output = [
	points_type_output_to_tile_output[1],
	[development_card_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[development_card_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_devcard_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_devcard_output)).attr("class", "active_path").attr("id", "type_output_to_devcard_output")
var path_type_output_to_devcard_output_length = path_type_output_to_devcard_output.node().getTotalLength();


//devcard head to logits
var points_devard_head_to_logits = [
	[devcard_logit_x + 2.5 * logit_size, head_box_y],
	[devcard_logit_x + 2.5 * logit_size, action_logit_y + logit_size]
]
var path_devcard_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devard_head_to_logits)).attr("class", "active_path").attr("id", "devcard_to_logits")
var path_devcard_to_logits_length = path_devcard_to_logits.node().getTotalLength();


// devcard mask to logits
var points_devcard_mask_to_logits = [
	[devcard_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[development_card_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[development_card_head_x + 0.6 * head_box_width, action_logit_y + logit_size]
]
var path_devcard_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_mask_to_logits)).attr("class", "active_path").attr("id", "devcard_mask_to_logits")
var path_devcard_mask_to_logits_length = path_devcard_mask_to_logits.node().getTotalLength();


//devcard logits to output
var points_devcard_logits_to_output = [
	[devcard_logit_x + 2.5 * logit_size, action_logit_y],
	[devcard_logit_x + 2.5 * logit_size, action_output_y + action_out_height]
]
var path_devcard_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_logits_to_output)).attr("class", "active_path").attr("id", "devcard_logits_to_output")
var path_devcard_logits_to_output_length = path_devcard_logits_to_output.node().getTotalLength();








// lstm to accept/reject
var points_extend_input_to_accept = [
	[development_card_head_x + (head_box_width / 2.0), points[1][1]],
	[respond_head_x + (head_box_width / 2.0), points[1][1]],
	[respond_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_acceptreject = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_accept)).attr("class", "active_path").attr("id", "lstm_to_respond");
var path_lstm_to_acceptreject_length = path_lstm_to_acceptreject.node().getTotalLength();
// d3.select("#lstm_to_respond").style("opacity", 0);


var points_proptrade_to_respond = [
	[current_trade_box_x + (current_trade_box_width / 2.0), current_trade_box_y],
	[current_trade_box_x + (current_trade_box_width / 2.0), points[1][1] + 15],
	[respond_head_x + (head_box_width / 2.0) + 25, points[1][1] + 15],
	[respond_head_x + (head_box_width / 2.0) + 25, head_box_y + head_box_height]
]
var path_prop_trade_to_respond_head = g_action_head.append("path").attr("d", getPathStringFromPoints(points_proptrade_to_respond)).attr("class", "active_path").attr("id", "prop_trade_to_respond");
var path_prop_trade_to_respond_head_length = path_prop_trade_to_respond_head.node().getTotalLength();

//type_output_extend_to_response
var points_type_output_to_respond = [
	[development_card_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[respond_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[respond_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_respond = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_respond)).attr("class", "active_path").attr("id", "type_output_to_respond_head")
var path_type_output_to_respond_length = path_type_output_to_respond.node().getTotalLength();


//type output to response
var points_type_output_to_respond_output = [
	points_type_output_to_devcard_output[1],
	[respond_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[respond_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_respond_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_respond_output)).attr("class", "active_path").attr("id", "type_output_to_respond_output")
var path_type_output_to_respond_output_length = path_type_output_to_respond_output.node().getTotalLength();


//respond head to logits
var points_respond_head_to_logits = [
	[respond_logit_x + 0.5 * logit_size, head_box_y],
	[respond_logit_x + 0.5 * logit_size, action_logit_y + logit_size]
]
var path_respond_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_respond_head_to_logits)).attr("class", "active_path").attr("id", "respond_to_logits")
var path_respond_to_logits_length = path_respond_to_logits.node().getTotalLength();


// respond mask to logits
var points_respond_mask_to_logits = [
	[response_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[respond_logit_x + 1.5*logit_size, mask_y_start + 0.5 * mask_rect_height],
	[respond_logit_x + 1.5*logit_size, action_logit_y + logit_size]
]
var path_respond_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_respond_mask_to_logits)).attr("class", "active_path").attr("id", "respond_mask_to_logits")
var path_respond_mask_to_logits_length = path_respond_mask_to_logits.node().getTotalLength();


//respond logits to output
var points_respond_logits_to_output = [
	[respond_logit_x + 0.5 * logit_size, action_logit_y],
	[respond_logit_x + 0.5 * logit_size, action_output_y + action_out_height]
]
var path_respond_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_respond_logits_to_output)).attr("class", "active_path").attr("id", "respond_logits_to_output")
var path_respond_logits_to_output_length = path_respond_logits_to_output.node().getTotalLength();






// lstm to player
var points_extend_input_to_player = [
	[respond_head_x + (head_box_width / 2.0), points[1][1]],
	[choose_player_head_x + (head_box_width / 2.0), points[1][1]],
	[choose_player_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_player = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_player)).attr("class", "active_path").attr("id", "lstm_to_player");
var path_lstm_to_player_length = path_lstm_to_player.node().getTotalLength();
// d3.select("#lstm_to_player").style("opacity", 0);


//type_output_extend_to_player
var points_type_output_to_player = [
	[corner_mask_x + (mask_rect_width/2.0), (head_box_y + head_box_height + points[1][1]) / 2.0],
	[choose_player_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[choose_player_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_player = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_player)).attr("class", "active_path").attr("id", "type_output_to_player_head")
var path_type_output_to_player_length = path_type_output_to_player.node().getTotalLength();

//extend type output to player mask
var points_type_output_to_player_mask = [
points_type_output_to_player[1],
[player_mask_x + mask_rect_width/2.0, points_type_output_to_corner_mask[1][1]],
[player_mask_x + mask_rect_width/2.0, mask_y_start + mask_rect_height]
]
var path_extend_type_to_player_mask = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_player_mask)).attr("class", "active_path").attr("id", "extend_type_out_to_player_mask");
var path_extend_type_to_player_mask_length = path_extend_type_to_player_mask.node().getTotalLength();

//type output to player
var points_type_output_to_player_output = [
	points_type_output_to_respond_output[1],
	[choose_player_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[choose_player_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_player_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_player_output)).attr("class", "active_path").attr("id", "type_output_to_player_output")
var path_type_output_to_player_output_length = path_type_output_to_player_output.node().getTotalLength();


//player head to logits
var points_player_head_to_logits = [
	[choose_player_head_x + 0.5 * head_box_width, head_box_y],
	[choose_player_head_x + 0.5 * head_box_width, player_circle_1_y]
]
var path_player_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_player_head_to_logits)).attr("class", "active_path").attr("id", "player_to_logits")
var path_player_to_logits_length = path_player_to_logits.node().getTotalLength();


// player dummy mask to logits
var points_dummy_player_mask_to_logits = [
	[player_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[choose_player_head_x + 0.6*head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[choose_player_head_x + 0.6*head_box_width, player_circle_1_y]
]
var path_dummy_player_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_dummy_player_mask_to_logits)).attr("class", "active_path").attr("id", "dummy_player_mask_to_logits")
var path_dummy_player_mask_to_logits_length = path_dummy_player_mask_to_logits.node().getTotalLength();
d3.select("#dummy_player_mask_to_logits").style("opacity", 0);

// steal_from mask to logits
var points_steal_from_mask_to_logits = [
	[player_mask_x, mask_y_start - 0.5 * mask_rect_height],
	[player_mask_x - 15, mask_y_start - 0.5 * mask_rect_height],
	[player_mask_x - 15, mask_y_start],
	[choose_player_head_x + 0.6*head_box_width, mask_y_start],
	[choose_player_head_x + 0.6*head_box_width, player_circle_1_y]
]
var path_steal_from_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_steal_from_mask_to_logits)).attr("class", "active_path").attr("id", "steal_from_mask_to_logits")
var path_steal_from_mask_to_logits_length = path_steal_from_mask_to_logits.node().getTotalLength();


//player logits to output
var points_player_logits_to_output = [
	[choose_player_head_x + 0.5 * head_box_width, player_circle_2_y - 50],
	[choose_player_head_x + 0.5 * head_box_width, action_output_y + action_out_height]
]
var path_player_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_player_logits_to_output)).attr("class", "active_path").attr("id", "player_logits_to_output")
var path_player_logits_to_output_length = path_player_logits_to_output.node().getTotalLength();





// lstm to res 1
var points_extend_input_to_res1 = [
	[choose_player_head_x + (head_box_width / 2.0), points[1][1]],
	[res1_head_x + (head_box_width / 2.0), points[1][1]],
	[res1_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_resource1 = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_res1)).attr("class", "active_path").attr("id", "lstm_to_res1");
var path_lstm_to_resource1_length = path_lstm_to_resource1.node().getTotalLength();
// d3.select("#lstm_to_res1").style("opacity", 0);

//type_output_extend_to_res1
var points_type_output_to_res1 = [
	[choose_player_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[res1_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[res1_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_res1 = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_res1)).attr("class", "active_path").attr("id", "type_output_to_res1_head")
var path_type_output_to_res1_length = path_type_output_to_res1.node().getTotalLength();


//type output to res1 output
var points_type_output_to_res1_output = [
	points_type_output_to_player_output[1],
	[res1_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[res1_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_res1_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_res1_output)).attr("class", "active_path").attr("id", "type_output_to_res1_output")
var path_type_output_to_res1_output_length = path_type_output_to_res1_output.node().getTotalLength();

//dev card output to res1 head
var points_devcard_output_to_res1_head = [
	[devcard_output_x + action_out_width, devcard_output_y + action_out_height/2.0],
	[(devcard_output_x + action_out_width + respond_output_x) / 2.0, devcard_output_y + action_out_height/2.0],
	[(devcard_output_x + action_out_width + respond_output_x) / 2.0, devcard_output_y + action_out_height/2.0 + 1.5*action_out_height],
	[res1_head_x-15, devcard_output_y + action_out_height/2.0 + 1.5*action_out_height],
	[res1_head_x-15, head_box_y + head_box_height + 8],
	[res1_head_x + 15, head_box_y + head_box_height + 8],
	[res1_head_x + 15, head_box_y + head_box_height]
]
var path_devout_to_res1_head = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_output_to_res1_head)).attr("id", "dev_output_to_res1_head").attr("class", "active_path")
var path_devout_to_res1_head_length = path_devout_to_res1_head.node().getTotalLength();

//extend dev card output to res1 mask
var points_devcard_output_to_res1_masks = [
	points_devcard_output_to_res1_head[5],
	[res1_mask_x + (mask_rect_width/2.0)-15, points_devcard_output_to_res1_head[5][1]],
	[res1_mask_x + (mask_rect_width/2.0)-15, mask_y_start + mask_rect_height]
]
var path_extend_devout_to_res1_masks = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_output_to_res1_masks)).attr("id", "extend_devout_to_res1_masks").attr("class", "active_path");
var path_extend_devout_to_res1_masks_length = path_extend_devout_to_res1_masks.node().getTotalLength();

//extend devout to res1 output
var points_devcard_output_to_res1_output = [
	points_devcard_output_to_res1_head[3],
	[points_devcard_output_to_res1_head[3][0], action_output_y + (action_out_height/2.0)],
	[res1_output_x, action_output_y + (action_out_height/2.0)]
]
var path_extend_devout_to_res1_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_output_to_res1_output)).attr("id", "extend_devout_to_res1_output").attr("class", "active_path");
var path_extend_devout_to_res1_output_length = path_extend_devout_to_res1_output.node().getTotalLength();

//extend type output to res1 masks
var points_type_output_to_res1_masks = [
	points_type_output_to_res1[1],
	[res1_mask_x + mask_rect_width/2.0, points_type_output_to_player[1][1]],
	[res1_mask_x + mask_rect_width/2.0, mask_y_start+mask_rect_height]
]
var path_type_to_res1_masks = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_res1_masks)).attr("id", "type_output_to_res1_masks").attr("class", "active_path");
var path_type_to_res1_masks_length = path_type_to_res1_masks.node().getTotalLength();

//res1 head to logits
var points_res1_head_to_logits = [
	[res1_logit_x + 2.5 * logit_size, head_box_y],
	[res1_logit_x + 2.5 * logit_size, action_logit_y + logit_size]
]
var path_res1_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_res1_head_to_logits)).attr("class", "active_path").attr("id", "res1_to_logits")
var path_res1_to_logits_length = path_res1_to_logits.node().getTotalLength();


// exchange mask to logits
var points_exchange_mask_to_logits = [
	[res1_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, action_logit_y + logit_size]
]
var path_exchange_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_exchange_mask_to_logits)).attr("class", "active_path").attr("id", "exchange_mask_to_logits")
var path_exchange_mask_to_logits_length = path_exchange_mask_to_logits.node().getTotalLength();


// monopoly mask to logits
var points_monopoly_mask_to_logits = [
	[res1_mask_x, mask_y_start - 0.5 * mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, mask_y_start - 0.5 * mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, action_logit_y + logit_size]
]
var path_monopoly_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_monopoly_mask_to_logits)).attr("class", "active_path").attr("id", "monopoly_mask_to_logits")
var path_monopoly_mask_to_logits_length = path_monopoly_mask_to_logits.node().getTotalLength();


// yop mask to logits
var points_yop_mask_to_logits = [
	[res1_mask_x, mask_y_start - 1.5 * mask_rect_height],
	[res1_mask_x - 20, mask_y_start-1.5*mask_rect_height],
	[res1_mask_x-20, mask_y_start-0.5*mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, mask_y_start - 0.5 * mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, action_logit_y + logit_size]
]
var path_yop_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_yop_mask_to_logits)).attr("class", "active_path").attr("id", "yop_mask_to_logits")
var path_yop_mask_to_logits_length = path_yop_mask_to_logits.node().getTotalLength();


// res1 dummy mask to logits
var points_res1dummy_mask_to_logits = [
	[res1_mask_x, mask_y_start - 2.5 * mask_rect_height],
	[res1_mask_x - 20, mask_y_start-2.5*mask_rect_height],
	[res1_mask_x-20, mask_y_start-0.5*mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, mask_y_start - 0.5 * mask_rect_height],
	[res1_head_x + 0.6 * head_box_width, action_logit_y + logit_size]
]
var path_res1dummy_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_res1dummy_mask_to_logits)).attr("class", "active_path").attr("id", "res1dummy_mask_to_logits")
var path_res1dummy_mask_to_logits_length = path_res1dummy_mask_to_logits.node().getTotalLength();



//res1 logits to output
var points_res1_logits_to_output = [
	[res1_logit_x + 2.5 * logit_size, action_logit_y],
	[res1_logit_x + 2.5 * logit_size, action_output_y + action_out_height]
]
var path_res1_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_res1_logits_to_output)).attr("class", "active_path").attr("id", "res1_logits_to_output")
var path_res1_logits_to_output_length = path_res1_logits_to_output.node().getTotalLength();







// lstm to res 2
var points_extend_input_to_res2 = [
	[res1_head_x + (head_box_width / 2.0), points[1][1]],
	[res2_head_x + (head_box_width / 2.0), points[1][1]],
	[res2_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_resource2 = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_res2)).attr("class", "active_path").attr("id", "lstm_to_res2");
var path_lstm_to_resource2_length = path_lstm_to_resource2.node().getTotalLength();
// d3.select("#lstm_to_res2").style("opacity", 0);

//type_output_extend_to_res2
var points_type_output_to_res2 = [
	[res1_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[res2_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[res2_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_res2 = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_res2)).attr("class", "active_path").attr("id", "type_output_to_res2_head")
var path_type_output_to_res2_length = path_type_output_to_res2.node().getTotalLength();


//type output to res2 output
var points_type_output_to_res2_output = [
	points_type_output_to_res1_output[1],
	[res2_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[res2_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_res2_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_res2_output)).attr("class", "active_path").attr("id", "type_output_to_res2_output")
var path_type_output_to_res2_output_length = path_type_output_to_res2_output.node().getTotalLength();


//res2 head to logits
var points_res2_head_to_logits = [
	[res2_logit_x + 2.5 * logit_size, head_box_y],
	[res2_logit_x + 2.5 * logit_size, action_logit_y + logit_size]
]
var path_res2_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_res2_head_to_logits)).attr("class", "active_path").attr("id", "res2_to_logits")
var path_res2_to_logits_length = path_res2_to_logits.node().getTotalLength();


//extend dev card output to res2 head
var points_devcard_output_to_res2_head = [
	points_devcard_output_to_res1_masks[0],
	[res2_head_x-15, points_devcard_output_to_res1_masks[0][1]],
	[res2_head_x-15, head_box_y + head_box_height + 8],
	[res2_head_x+15, head_box_y + head_box_height + 8],
	[res2_head_x+15, head_box_y + head_box_height]
]
var path_devout_to_res2_head = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_output_to_res2_head)).attr("id", "dev_output_to_res2_head").attr("class", "active_path")
var path_devout_to_res2_head_length = path_devout_to_res2_head.node().getTotalLength();

//extend devout to res2 output
var points_devcard_output_to_res2_output = [
	points_devcard_output_to_res2_head[1],
	[points_devcard_output_to_res2_head[1][0], action_output_y + (action_out_height/2.0)],
	[res2_output_x, action_output_y + (action_out_height/2.0)]
]
var path_extend_devout_to_res2_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_devcard_output_to_res2_output)).attr("id", "extend_devout_to_res2_output").attr("class", "active_path");
var path_extend_devout_to_res2_output_length = path_extend_devout_to_res2_output.node().getTotalLength();


// inbank mask to logits
var points_inbank_mask_to_logits = [
	[res2_mask_x, mask_y_start + 0.5 * mask_rect_height],
	[res2_head_x + 0.6 * head_box_width, mask_y_start + 0.5 * mask_rect_height],
	[res2_head_x + 0.6 * head_box_width, action_logit_y + logit_size]
]
var path_inbank_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_inbank_mask_to_logits)).attr("class", "active_path").attr("id", "inbank_mask_to_logits")
var path_inbank_mask_to_logits_length = path_inbank_mask_to_logits.node().getTotalLength();


//res2 logits to output
var points_res2_logits_to_output = [
	[res2_logit_x + 2.5 * logit_size, action_logit_y],
	[res2_logit_x + 2.5 * logit_size, action_output_y + action_out_height]
]
var path_res2_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_res2_logits_to_output)).attr("class", "active_path").attr("id", "res2_logits_to_output")
var path_res2_logits_to_output_length = path_res2_logits_to_output.node().getTotalLength();





// lstm to trade propose
var points_extend_input_to_prop_give = [
	[res2_head_x + (head_box_width / 2.0), points[1][1]],
	[prop_trade_to_give_head_x + (head_box_width / 2.0), points[1][1]],
	[prop_trade_to_give_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_proptrade = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_prop_give)).attr("class", "active_path").attr("id", "lstm_to_proptrade");
var path_lstm_to_proptrade_length = path_lstm_to_proptrade.node().getTotalLength();

//curr res to head
var points_curr_res_to_trade_head = [
	[current_res_box_x + 0.25*current_res_box_width, current_res_box_y],
	[current_res_box_x + 0.25*current_res_box_width, head_box_y+head_box_height]
]
var path_curr_res_to_proptrade = g_action_head.append("path").attr("d", getPathStringFromPoints(points_curr_res_to_trade_head)).attr("class", "active_path").attr("id", "currres_to_proptrade");
var path_curr_res_to_proptrade_length = path_curr_res_to_proptrade.node().getTotalLength();

//curr res to mask
var points_curr_res_to_trade_mask = [
	[prop_give_mask_x + (prop_give_width/2.0), current_res_box_y],
	[prop_give_mask_x + (prop_give_width/2.0), prop_give_y + 2*mask_rect_height]
]
var path_curr_res_to_proptrade_mask = g_action_head.append("path").attr("d", getPathStringFromPoints(points_curr_res_to_trade_mask)).attr("class", "active_path").attr("id", "currres_to_proptrade_mask");
var path_curr_res_to_proptrade_mask_length = path_curr_res_to_proptrade_mask.node().getTotalLength();

//type_output_extend_to_trade_give
var points_type_output_to_trade_give = [
	[res2_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[prop_trade_to_give_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[prop_trade_to_give_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_trade_give = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_trade_give)).attr("class", "active_path").attr("id", "type_output_to_trade_give_head")
var path_type_output_to_trade_give_length = path_type_output_to_trade_give.node().getTotalLength();


//type output to trade_give output
var points_type_output_to_trade_give_output = [
	points_type_output_to_res2_output[1],
	[prop_trade_to_give_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[prop_trade_to_give_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_trade_give_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_trade_give_output)).attr("class", "active_path").attr("id", "type_output_to_trade_give_output")
var path_type_output_to_trade_give_output_length = path_type_output_to_trade_give_output.node().getTotalLength();


//trade_give head to logits
var points_trade_give_head_to_logits = [
	[prop_give_logit_x + 3.0 * logit_size, head_box_y],
	[prop_give_logit_x + 3.0 * logit_size, action_logit_y + logit_size]
]
var path_trade_give_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_trade_give_head_to_logits)).attr("class", "active_path").attr("id", "trade_give_to_logits")
var path_trade_give_to_logits_length = path_trade_give_to_logits.node().getTotalLength();


// curr_res mask to logits
var points_currres_mask_to_logits = [
	[prop_give_mask_x, mask_y_start],
	[prop_trade_to_give_head_x + 0.6*head_box_width, mask_y_start],
	[prop_trade_to_give_head_x + 0.6*head_box_width, action_logit_y + logit_size]
]
var path_currres_mask_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_currres_mask_to_logits)).attr("class", "active_path").attr("id", "currres_mask_to_logits")
var path_currres_mask_to_logits_length = path_currres_mask_to_logits.node().getTotalLength();


//trade_give logits to output
var points_trade_give_logits_to_output = [
	[prop_give_logit_x + 3.0 * logit_size, action_logit_y],
	[prop_give_logit_x + 3.0 * logit_size, action_output_y + action_out_height]
]
var path_trade_give_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_trade_give_logits_to_output)).attr("class", "active_path").attr("id", "trade_give_logits_to_output")
var path_trade_give_logits_to_output_length = path_trade_give_logits_to_output.node().getTotalLength();

//trade give output to head
var points_give_output_to_head = [
	[prop_give_output_x + 0.03*prop_give_width, action_output_y + action_out_height-2],
	[prop_give_output_x + 0.03*prop_give_width, head_box_y+head_box_height + 20],
	[prop_trade_to_give_head_x + 0.25*head_box_width, head_box_y+head_box_height+20],
	[prop_trade_to_give_head_x + 0.25*head_box_width, head_box_y+head_box_height]
]
var path_trade_output_to_head = g_action_head.append("path").attr("d", getPathStringFromPoints(points_give_output_to_head)).attr("class", "active_path").attr("id", "trade_give_output_to_head")
var path_trade_output_to_head_length = path_trade_output_to_head.node().getTotalLength();




// lstm to trade receive
var points_extend_input_to_prop_rec = [
	[prop_trade_to_give_head_x + (head_box_width / 2.0), points[1][1]],
	[prop_trade_to_receive_head_x + (head_box_width / 2.0), points[1][1]],
	[prop_trade_to_receive_head_x + (head_box_width / 2.0), head_box_y + head_box_height]
]
var path_lstm_to_receivetrade = g_action_head.append("path").attr("d", getPathStringFromPoints(points_extend_input_to_prop_rec)).attr("class", "active_path").attr("id", "lstm_to_receivetrade");
var path_lstm_to_receivetrade_length = path_lstm_to_receivetrade.node().getTotalLength();
// d3.select("#lstm_to_receivetrade").style("opacity", 0);

//type_output_extend_to_trade_rec
var points_type_output_to_trade_rec = [
	[prop_trade_to_give_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[prop_trade_to_receive_head_x + 0.25 * head_box_width, (head_box_y + head_box_height + points[1][1]) / 2.0],
	[prop_trade_to_receive_head_x + 0.25 * head_box_width, head_box_y + head_box_height]
]
var path_type_output_to_trade_receive = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_trade_rec)).attr("class", "active_path").attr("id", "type_output_to_trade_rec_head")
var path_type_output_to_trade_receive_length = path_type_output_to_trade_receive.node().getTotalLength();


//type output to trade_rec output
var points_type_output_to_trade_rec_output = [
	points_type_output_to_trade_give_output[1],
	[prop_trade_to_receive_head_x + (head_box_width / 2.0), points_from_type_output[2][1]],
	[prop_trade_to_receive_head_x + (head_box_width / 2.0), action_output_y]
]
var path_type_output_to_trade_rec_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_type_output_to_trade_rec_output)).attr("class", "active_path").attr("id", "type_output_to_trade_rec_output")
var path_type_output_to_trade_rec_output_length = path_type_output_to_trade_rec_output.node().getTotalLength();


//trade_rec head to logits
var points_trade_rec_head_to_logits = [
	[prop_rec_logit_x + 3.0 * logit_size, head_box_y],
	[prop_rec_logit_x + 3.0 * logit_size, action_logit_y + logit_size]
]
var path_trade_give_to_logits = g_action_head.append("path").attr("d", getPathStringFromPoints(points_trade_rec_head_to_logits)).attr("class", "active_path").attr("id", "trade_rec_to_logits")
var path_trade_give_to_logits_length = path_trade_give_to_logits.node().getTotalLength();


//trade_rec logits to output
var points_trade_rec_logits_to_output = [
	[prop_rec_logit_x + 3.0 * logit_size, action_logit_y],
	[prop_rec_logit_x + 3.0 * logit_size, action_output_y + action_out_height]
]
var path_trade_rec_logits_to_output = g_action_head.append("path").attr("d", getPathStringFromPoints(points_trade_rec_logits_to_output)).attr("class", "active_path").attr("id", "trade_rec_logits_to_output")
var path_trade_rec_logits_to_output_length = path_trade_rec_logits_to_output.node().getTotalLength();

//trade receive output to head
var points_receive_output_to_head = [
	[prop_rec_output_x + 0.03*prop_give_width, action_output_y + action_out_height-2],
	[prop_rec_output_x + 0.03*prop_give_width, head_box_y+head_box_height + 20],
	[prop_trade_to_receive_head_x + 0.25*head_box_width, head_box_y+head_box_height+20],
	[prop_trade_to_receive_head_x + 0.25*head_box_width, head_box_y+head_box_height]
]
var path_trade_rec_output_to_head = g_action_head.append("path").attr("d", getPathStringFromPoints(points_receive_output_to_head)).attr("class", "active_path").attr("id", "trade_rec_output_to_head")
var path_trade_rec_output_to_head_length = path_trade_rec_output_to_head.node().getTotalLength();

//trade give output to trade rec input
var points_trade_give_output_to_trade_rec = [
	[prop_give_output_x + action_out_width + 24, prop_give_output_y + (action_out_height / 2.0)],
	[prop_trade_to_receive_head_x - 35, prop_give_output_y + (action_out_height / 2.0)],
	[prop_trade_to_receive_head_x - 35, head_box_y + (head_box_height/2.0)],
	[prop_trade_to_receive_head_x, head_box_y + (head_box_height / 2.0)]
]
var path_trade_give_out_to_trade_rec = g_action_head.append("path").attr("d", getPathStringFromPoints(points_trade_give_output_to_trade_rec)).attr("class", "active_path").attr("id", "trade_give_output_to_trade_rec")
var path_trade_give_out_to_trade_rec_length = path_trade_give_out_to_trade_rec.node().getTotalLength();






var action_output_text = g_action_head.append("text").text("").attr("class", "output_text")

var actual_action_type_id = -1;
var actual_action_type_text = "";

var corner_output_text = g_action_head.append("text").text("").attr("class", "output_text")
var actual_corner_text = "";

var edge_output_text = g_action_head.append("text").text("").attr("class", "output_text");
var actual_edge_text = "";

var tile_output_text = g_action_head.append("text").text("").attr("class", "output_text");
var actual_tile_text = "";

var devcard_output_text = g_action_head.append("text").text("").attr("class", "output_text");
var actual_devcard_id = -1;
var actual_devcard_text = "";

var respond_output_text = g_action_head.append("text").text("").attr("class", "output_text");
var actual_respond_id = -1;
var actual_respond_text = "";

var player_output_text = g_action_head.append("text").text("").attr("class", "output_text");
var actual_player_id = -1;
var actual_player_text = "";

var actual_res1_id = -1;
var actual_res2_id = -1;



var current_resource_values = [1, 0, 2, 5, 3];

var current_proposed_resources = [0, 0, 0, 0, 0];
var current_receive_resources = [0, 0, 0, 0, 0];

var max_trade_loops = 4;
var number_proposed_loop = 0;
var number_receive_loop = 0;
var terminate_propose_loop = false;
var terminate_receive_loop = false;

var current_resource_mask_texts = []
for(i=0; i < 5; i++) {
	current_resource_mask_texts.push(g_action_head.append("text").text("").attr("class", "curr_res_text"))
}

var current_proposed_resources_texts = []
var current_receive_resources_texts = []
for(i=0; i < 5; i++) {
	current_proposed_resources_texts.push(g_action_head.append("text").text("").attr("class", "curr_res_text"))
	current_receive_resources_texts.push(g_action_head.append("text").text("").attr("class", "curr_res_text"))
}


/*
ANIMATION
*/

// initZoom();
// sampleTypeLogitsInit();
// draw_type_logits();
// sampleCornerLogitsInit();
// draw_corner_logits(include_crosses=true);
// sampleEdgeLogitsInit();
// draw_edge_logits(include_crosses=true);
// sampleTileLogitsInit();
// draw_tile_logits(include_crosses=true);
// sampleDevCardLogitsInit();
// draw_devcard_logits(include_crosses=true);
// sampleRespondLogitsInit();
// draw_respond_logits(include_crosses=true);
// samplePlayerLogitsInit();
// draw_player_logits(include_crosses=true);
// sampleRes1LogitsInit();
// draw_res1_logits(include_crosses=true);
// sampleRes2LogitsInit();
// draw_res2_logits(include_crosses=true);

// updateCurrentResMasks();
// samplePropGiveLogitsInit();
// draw_propgive_logits(include_crosses=true);

// samplePropRecLogitsInit();
// draw_proprec_logits();


var zoom = d3.zoom().scaleExtent([0.5, 4]).on('zoom', handleZoom);
function initZoom() {
  d3.select('#action-space-app')
    .call(zoom).on("wheel.zoom", null);
}

function handleZoom(e) {
  d3.select('#action-space-app g')
    .attr('transform', e.transform);
}

function zoomIn() {
  d3.select('#action-space-app')
    .transition()
    .call(zoom.scaleBy, 2);
}

function zoomOut() {
  d3.select('#action-space-app')
    .transition()
    .call(zoom.scaleBy, 0.5);
}

function resetView() {
	d3.select("#action-space-app").transition().call(zoom.transform, d3.zoomIdentity);
}


function randomise_action_masks() {
	for(i=0; i<5; i++) {
		current_resource_values[i] = Math.floor(5*Math.random()-0.0000001)
	}
	updateCurrentResMasks();

	corner_masks = []
for(i=0; i<24; i++) {
	if(Math.random() < 0.5) {
		corner_masks.push(1)
	} else {
		corner_masks.push(0)
	}
}
action_masks["corner"] = corner_masks

edge_masks = []
for(i=0; i<30; i++) {
	if(Math.random() < 0.5) {
		edge_masks.push(1)
	} else {
		edge_masks.push(0)
	}
}
action_masks["edge"] = edge_masks

tile_masks = []
for(i=0; i<7; i++) {
	if(Math.random() < 0.5) {
		tile_masks.push(1)
	} else {
		tile_masks.push(0)
	} 
}
action_masks["tile"] = tile_masks

var devcard_masks = []
for(i=0; i<5; i++) {
	if(Math.random() < 0.5) {
		devcard_masks.push(1)
	} else {
		devcard_masks.push(0)
	}
}
action_masks["devcard"] = devcard_masks

var respond_masks = []
for(i=0; i<2; i++) {
	if(Math.random() < 0.5) {
		respond_masks.push(1)
	} else {
		respond_masks.push(0)
	}
}

if(respond_masks[0] == 0 && respond_masks[1] == 0) {
	respond_masks[1] = 1;
}
action_masks["respond"] = respond_masks




var player_masks = []
for(i=0; i<3; i++) {
	if(Math.random() < 0.5) {
		player_masks.push(1)
	} else {
		player_masks.push(0)
	}
}

if(player_masks[0] == 0 && player_masks[1] == 0 && player_masks[2] == 0) {
	player_masks[1] = 1;
}
action_masks["player"] = player_masks


var exchange_masks = []
for(i=0; i<5; i++) {
	if(Math.random() < 0.5) {
		exchange_masks.push(1)
	} else {
		exchange_masks.push(0)
	}
}
if(exchange_masks[0]==0 && exchange_masks[1]==0 && exchange_masks[2]==0 && exchange_masks[3]==0 && exchange_masks[4]==0) {
	exchange_masks[1] = 1;
}
action_masks["exchange"] = exchange_masks

var monopoly_masks = []
for(i=0; i<5; i++) {
	if(Math.random() < 0.5) {
		monopoly_masks.push(1)
	} else {
		monopoly_masks.push(0)
	}
}
if(monopoly_masks[0]==0 && monopoly_masks[1]==0 && monopoly_masks[2]==0 && monopoly_masks[3]==0 && monopoly_masks[4]==0) {
	monopoly_masks[1] = 1;
}
action_masks["monopoly"] = monopoly_masks

var yop_masks = []
for(i=0; i<5; i++) {
	if(Math.random() < 0.5) {
		yop_masks.push(1)
	} else {
		yop_masks.push(0)
	}
}
if(yop_masks[0]==0 && yop_masks[1]==0 && yop_masks[2]==0 && yop_masks[3]==0 && yop_masks[4]==0) {
	yop_masks[1] = 1;
}
action_masks["yop"] = yop_masks

var dummy_res1_masks = []
for(i=0; i<5; i++) {
	dummy_res1_masks.push(1)
}
action_masks["dummy_res1"] = dummy_res1_masks


var res2_masks = []
for(i=0; i<5; i++) {
	if(Math.random() < 0.5) {
		res2_masks.push(1)
	} else {
		res2_masks.push(0)
	}
}
action_masks["res2"] = res2_masks

var dummy_corner_masks = []
for(i=0; i<24; i++) {
	dummy_corner_masks.push(1)
	action_masks["dummy_corner"] = dummy_corner_masks
}

var dummy_player_masks = []
for(i=0; i<3; i++) {
	dummy_player_masks.push(1)
	action_masks["dummy_player"] = dummy_player_masks
}

}


function updateCurrentResourceValues() {
	y = prop_give_y + mask_rect_height + res_img_height / 2.0 + 5
	for(i=0; i<5; i++) {
		current_resource_mask_texts[i].text(String(current_resource_values[i]))
		text_width = current_resource_mask_texts[i].node().getBBox().width;
		x = prop_give_mask_x + gap_between_res*(i+1) + res_img_width*i - (text_width/2.0) + (res_img_width / 2.0);
		current_resource_mask_texts[i].attr("x", x).attr("y", y)
	}
}

function draw_proposed_resources_action(initialise_images=false) {
	if(initialise_images) {
		start_x = prop_give_output_x + 7;
		gap_between_res = 1;
		img_y = action_output_y + 2;
		for(i=0; i<5; i++) {
			g_action_head.append("svg:image").attr("x", start_x + gap_between_res*(i-1) + res_img_width * i).attr("y", img_y).attr("width", res_img_width).attr("height", res_img_height).attr("xlink:href", res_images[i]).attr("class", "propgive_output_images")
		}
	}
	start_x = prop_give_output_x + 7;
	text_y = action_output_y + res_img_height+15;
	for(i=0; i<5; i++) {
		current_proposed_resources_texts[i].text(String(current_proposed_resources[i]))
		text_width = current_proposed_resources_texts[i].node().getBBox().width;
		x = start_x + gap_between_res*(i-1) + res_img_width*i + (res_img_width/2.0) - (text_width/2.0);
		current_proposed_resources_texts[i].attr("x", x).attr("y", text_y)
	}
}

function draw_receive_resources_action(initialise_images=false) {
	if(initialise_images) {
		start_x = prop_rec_output_x + 7;
		gap_between_res = 1;
		img_y = action_output_y + 2;
		for(i=0; i<5; i++) {
			g_action_head.append("svg:image").attr("x", start_x + gap_between_res*(i-1) + res_img_width * i).attr("y", img_y).attr("width", res_img_width).attr("height", res_img_height).attr("xlink:href", res_images[i]).attr("class", "proprec_output_images")
		}
	}

	start_x = prop_rec_output_x + 7;
	text_y = action_output_y + res_img_height+15;
	for(i=0; i<5; i++) {
		current_receive_resources_texts[i].text(String(current_receive_resources[i]))
		text_width = current_receive_resources_texts[i].node().getBBox().width;
		x = start_x + gap_between_res*(i-1) + res_img_width*i + (res_img_width/2.0) - (text_width/2.0);
		current_receive_resources_texts[i].attr("x", x).attr("y", text_y);
	}
}


function updateCurrentResMasks() {
	propgive_masks = []
	for(i=0; i<5; i++) {
		if(current_resource_values[i] >= 1){
			propgive_masks.push(1)
		} else {
			propgive_masks.push(0)
		}
	}
	if(number_proposed_loop == 0) {
		propgive_masks.push(0)
	} else {
		propgive_masks.push(1)
	}
	action_masks["prop_give"] = propgive_masks
}





function updateActionTypeMasks() {
	let checkbox_1 = document.getElementById("placeSettlementCheckbox")
	if (checkbox_1.checked == true) {
		action_masks["action_type"][0] = 1
	} else {
		action_masks["action_type"][0] = 0
	}

	let checkbox_2 = document.getElementById("placeRoadCheckbox")
	if (checkbox_2.checked == true) {
		action_masks["action_type"][1] = 1
	} else {
		action_masks["action_type"][1] = 0
	}

	let checkbox_3 = document.getElementById("upgradeToCityCheckbox")
	if (checkbox_3.checked == true) {
		action_masks["action_type"][2] = 1
	} else {
		action_masks["action_type"][2] = 0
	}

	let checkbox_4 = document.getElementById("buyDevelopmentCheckbox")
	if (checkbox_4.checked == true) {
		action_masks["action_type"][3] = 1
	} else {
		action_masks["action_type"][3] = 0
	}

	let checkbox_5 = document.getElementById("playDevelopmentCardCheckbox")
	if (checkbox_5.checked == true) {
		action_masks["action_type"][4] = 1
	} else {
		action_masks["action_type"][4] = 0
	}

	let checkbox_6 = document.getElementById("exchangeResourceCheckbox")
	if (checkbox_6.checked == true) {
		action_masks["action_type"][5] = 1
	} else {
		action_masks["action_type"][5] = 0
	}

	let checkbox_7 = document.getElementById("proposeTradeCheckbox")
	if (checkbox_7.checked == true) {
		action_masks["action_type"][6] = 1
	} else {
		action_masks["action_type"][6] = 0
	}

	let checkbox_8 = document.getElementById("respondToTradeCheckbox")
	if (checkbox_8.checked == true) {
		action_masks["action_type"][7] = 1
	} else {
		action_masks["action_type"][7] = 0
	}

	let checkbox_9 = document.getElementById("moveRobberCheckbox")
	if (checkbox_9.checked == true) {
		action_masks["action_type"][8] = 1
	} else {
		action_masks["action_type"][8] = 0
	}

	let checkbox_10 = document.getElementById("rollDiceCheckbox")
	if (checkbox_10.checked == true) {
		action_masks["action_type"][9] = 1
	} else {
		action_masks["action_type"][9] = 0
	}

	let checkbox_11 = document.getElementById("endTurnCheckbox")
	if (checkbox_11.checked == true) {
		action_masks["action_type"][10] = 1
	} else {
		action_masks["action_type"][10] = 0
	}

	let checkbox_12 = document.getElementById("stealResourceCheckbox")
	if (checkbox_12.checked == true) {
		action_masks["action_type"][11] = 1
	} else {
		action_masks["action_type"][11] = 0
	}

}


function draw_type_logits(include_crosses=false) {
	for(i=0; i<12; i++) {
		action_logits[i].style("fill-opacity", type_logits[i])
		if(include_crosses) {
			if(action_masks["action_type"][i]==0) {
				action_logit_crosses_1[i].style("opacity", 1.0);
				action_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				action_logit_crosses_1[i].style("opacity", 0.0);
				action_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}


function sampleTypeLogitsNoMask() {
	logits = [];
	for(i=0; i < 12; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<12; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<12; i++) {
		type_logits[i] = Math.exp(logits[i] - log_sum_exp)
	}
}


function applyMasksToTypeLogits() {
	prob_sum = 0.0
	for(i=0; i < 12; i++) {
		if(action_masks["action_type"][i] == 1) {
			prob_sum += type_logits[i];
		} else {
			type_logits[i] = 0.0;
		}
	}

	for(i=0; i<12; i++) {
		type_logits[i] /= prob_sum;
	}
}



function start_type_head_animation() {
	d3.select("#lstm_to_type").style("opacity", 1.0);
	path_lstm_to_type.attr("stroke-dasharray", path_lstm_to_type_length + " " + path_lstm_to_type_length).attr("stroke-dashoffset", path_lstm_to_type_length).transition()
	.duration(1000).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", type_head_to_logits_path)
}

function type_head_to_logits_path() {
	d3.select("#type_to_logits").style("opacity", 1.0);
	path_type_to_logits.attr("stroke-dasharray", path_type_to_logits_length + " " + path_type_to_logits_length).attr("stroke-dashoffset", path_type_to_logits_length).transition()
		.duration(300).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_type_logits)
}

function initial_draw_type_logits() {
	for(i=0; i<12; i++) {
		action_logits[i].transition().style("fill", "green")
	}
	draw_type_logits();

	
	d3.select("#type_mask_to_logits").style("opacity", 1.0);
	path_type_masks_to_logits.attr("stroke-dasharray", path_type_masks_to_logits_length + " " + path_type_masks_to_logits_length).attr("stroke-dashoffset", path_type_masks_to_logits_length).transition()
		.duration(500).delay(500).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("start", select_type_mask).on("end", draw_type_logits_with_mask);
}

function select_type_mask() {
	type_mask.attr("class", "active_mask")
}

function sample_action_type() {
	action_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<12; i++) {
		prob_sum += type_logits[i];
		if(random_num < prob_sum) {
			action_id = i;
			break;
		}
	}
	if(action_id==-1) {
		action_id = 11;
	}
	if(action_id == 0) {
		action_text = "Place Settlement"
	} else if(action_id==1) {
		action_text = "Place Road"
	} else if(action_id==2) {
		action_text = "Upgrade To City"
	} else if(action_id==3) {
		action_text = "Buy Development Card"
	} else if(action_id==4) {
		action_text = "Play Development\n Card"
	} else if(action_id==5) {
		action_text = "Exchange Resources"
	} else if(action_id==6) {
		action_text = "Propose Trade"
	} else if(action_id==7) {
		action_text = "Respond To Trade"
	} else if(action_id==8) {
		action_text = "Move Robber"
	} else if(action_id==9) {
		action_text = "Roll Dice"
	} else if(action_id==10) {
		action_text = "End Turn"
	} else if(action_id==11) {
		action_text = "Steal Resource"
	}
	return [action_id, action_text]
}

function draw_type_logits_with_mask() {
	applyMasksToTypeLogits();
	draw_type_logits(include_crosses=true);

	actual_action_type = sample_action_type();
	actual_action_type_id = actual_action_type[0];
	actual_action_type_text = actual_action_type[1];

	action_logits[actual_action_type_id].style("stroke-width", "3")


	d3.select("#type_logits_to_output").style("opacity", 1.0);
	path_type_logits_to_output.attr("stroke-dasharray", path_type_logits_to_output_length + " " + path_type_logits_to_output_length).attr("stroke-dashoffset", path_type_logits_to_output_length).transition()
		.duration(500).delay(500).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_action_type_text)
}

function fill_in_action_type_text() {
	action_output_text.text(actual_action_type_text)
	text_width = action_output_text.node().getBBox().width;
	action_output_text.attr("x", action_type_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3)

	d3.select("#type_output_to_corner_head").style("opacity", 1.0);
	path_type_output_to_corner.attr("stroke-dasharray", path_type_output_to_corner_length + " " + path_type_output_to_corner_length).attr("stroke-dashoffset", path_type_output_to_corner_length).transition()
		.duration(1000).delay(0).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", extend_type_out_to_corner_mask);
}

function extend_type_out_to_corner_mask() {
	d3.select("#type_output_to_corner_mask").style("opacity", 1.0);
	path_output_to_corner_mask.attr("stroke-dasharray", path_output_to_corner_mask_length + " " + path_output_to_corner_mask_length).attr("stroke-dashoffset", path_output_to_corner_mask_length).transition()
		.duration(500).delay(0).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", extend_lstm_to_corner);
}

function extend_lstm_to_corner() {
	if (actual_action_type_id == 0) {
			mask_to_change = settlement_mask
		} else if(actual_action_type_id == 2) {
			mask_to_change = city_mask
		} else {
			mask_to_change = dummy_corner_mask
		}
		mask_to_change.attr("class", "active_mask");

	d3.select("#lstm_to_corner").style("opacity", 1.0);
	path_lstm_to_corner.attr("stroke-dasharray", path_lstm_to_corner_length + " " + path_lstm_to_corner_length).attr("stroke-dashoffset", path_lstm_to_corner_length).transition()
		.duration(300).delay(10).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", corner_head_to_logits);
}

function corner_head_to_logits() {
	d3.select("#corner_to_logits").style("opacity", 1.0);
	path_corner_to_logits.attr("stroke-dasharray", path_corner_to_logits_length + " " + path_corner_to_logits_length).attr("stroke-dashoffset", path_corner_to_logits_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_corner_logits);
}


function draw_corner_logits(include_crosses=false) {
	for(i=0; i<24; i++) {
		dummy_corner_logits[i].style("opacity", 1.0)
		corner_logits[i].style("fill-opacity", corner_logits_vals[i])

		if(actual_action_type_id==0 || actual_action_type_id==2) {
			mask_to_use = "corner"
		} else {
			mask_to_use = "dummy_corner"
		}

		if(include_crosses) {
			if(action_masks[mask_to_use][i]==0) {
				corner_logit_crosses_1[i].style("opacity", 1.0);
				corner_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				corner_logit_crosses_1[i].style("opacity", 0.0);
				corner_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}

function sampleCornerLogitsNoMask() {
	logits = [];
	for(i=0; i < 24; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<24; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<24; i++) {
		corner_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}


function applyMasksToCornerLogits() {
	prob_sum = 0.0

	if(actual_action_type_id==0 || actual_action_type_id==2) {
		mask_to_use = "corner"
	} else {
		mask_to_use = "dummy_corner"
	}

	for(i=0; i<24; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += corner_logits_vals[i];
		} else {
			corner_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<24; i++) {
		corner_logits_vals[i] /= prob_sum;
	}
}

function initial_draw_corner_logits() {
	for(i=0; i<24; i++) {
		corner_logits[i].transition().style("fill", "green");
	}
	draw_corner_logits();

	if (actual_action_type_id == 0) {
		mask_path = path_settlement_mask_to_logits
		mask_len = path_settlement_mask_to_logits_length
	} else if (actual_action_type_id == 2) {
		mask_path = path_city_mask_to_logits
		mask_len = path_city_mask_to_logits_length
	} else {
		mask_path = path_dummy_corner_mask_to_logits
		mask_len = path_dummy_corner_mask_to_logits_length
	}

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(50).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_corner_logits_with_mask)

}


function sample_corner() {
	corner_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<24; i++) {
		prob_sum += corner_logits_vals[i];
		if (random_num < prob_sum) {
			corner_id = i;
			break;
		}
	}
	return String(corner_id)
}


function draw_corner_logits_with_mask() {
	applyMasksToCornerLogits();
	draw_corner_logits(include_crosses=true);

	actual_corner_text = sample_corner();
	corner_logits[parseInt(actual_corner_text)].style("stroke-width", "3");


	d3.select("#corner_logits_to_output").style("opacity", 1.0);
	path_corner_logits_to_output.attr("stroke-dasharray", path_corner_logits_to_output_length + " " + path_corner_logits_to_output_length).attr("stroke-dashoffset", path_corner_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_corner_output_text);
}


function fill_in_corner_output_text() {
	corner_output_text.text("Corner " + actual_corner_text)
	text_width = corner_output_text.node().getBBox().width;
	corner_output_text.attr("x", corner_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3)

	d3.select("#type_output_to_corner_output").style("opacity", 1.0);
	path_type_output_to_corner_output.attr("stroke-dasharray", path_type_output_to_corner_output_length + " " + path_type_output_to_corner_output_length).attr("stroke-dashoffset", path_type_output_to_corner_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_corner_head_and_continue);
}

function change_corner_head_and_continue() {
	if(actual_action_type_id == 0 || actual_action_type_id == 2) {
		//pass
	} else {
		corner_output.style("opacity", 0.25);
		corner_output_text.style("opacity", 0.25);
	}


	d3.select("#lstm_to_edge").style("opacity", 1.0);
	path_lstm_to_edge.attr("stroke-dasharray", path_lstm_to_edge_length + " " + path_lstm_to_edge_length).attr("stroke-dashoffset", path_lstm_to_edge_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", edge_head_to_logits_p1);
}



function draw_edge_logits(include_crosses=false) {


	for(i=0; i<30; i++) {
		dummy_edge_logits[i].style("opacity", 1.0)
		edge_logits[i].style("fill-opacity", edge_logits_vals[i])
		if(include_crosses) {
			if(action_masks["edge"][i]==0) {
				edge_logit_crosses_1[i].style("opacity", 1.0);
				edge_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				edge_logit_crosses_1[i].style("opacity", 0.0);
				edge_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}


function sampleEdgeLogitsNoMask() {
	logits = [];
	for(i=0; i < 30; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<30; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<30; i++) {
		edge_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}


function applyMasksToEdgeLogits() {
	prob_sum = 0.0

	mask_to_use = "edge";

	for(i=0; i<30; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += edge_logits_vals[i];
		} else {
			edge_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<30; i++) {
		edge_logits_vals[i] /= prob_sum;
	}
}


function edge_head_to_logits_p1() {
	d3.select("#edge_to_logits").style("opacity", 1.0);
	path_edge_to_logits.attr("stroke-dasharray", path_edge_to_logits_length + " " + path_edge_to_logits_length).attr("stroke-dashoffset", path_edge_to_logits_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_edge_logits);

	road_mask.attr("class", "active_mask");
}


function initial_draw_edge_logits() {
	for(i=0; i<30; i++) {
		edge_logits[i].transition().style("fill", "green");
	}
	draw_edge_logits();

	mask_path = path_road_mask_to_logits;
	mask_len = path_road_mask_to_logits_length;


	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_edge_logits_with_mask);

}


function sample_edge() {
	edge_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<30; i++) {
		prob_sum += edge_logits_vals[i];
		if (random_num < prob_sum) {
			edge_id = i;
			break;
		}
	}
	return String(edge_id)
}

function draw_edge_logits_with_mask() {
	applyMasksToEdgeLogits();
	draw_edge_logits(include_crosses=true);

	actual_edge_text = sample_edge();
	edge_logits[parseInt(actual_edge_text)].style("stroke-width", 3);

	d3.select("#edge_logits_to_output").style("opacity", 1.0);
	path_edge_logits_to_output.attr("stroke-dasharray", path_edge_logits_to_output_length + " " + path_edge_logits_to_output_length).attr("stroke-dashoffset", path_edge_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_edge_output_text);
}

function fill_in_edge_output_text() {
	edge_output_text.text("Edge " + actual_edge_text)
	text_width = edge_output_text.node().getBBox().width;
	edge_output_text.attr("x", edge_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3);

	d3.select("#type_output_to_edge_output").style("opacity", 1.0);
	path_type_output_to_edge_output.attr("stroke-dasharray", path_type_output_to_edge_output_length + " " + path_type_output_to_edge_output_length).attr("stroke-dashoffset", path_type_output_to_edge_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_edge_head_and_continue);
}


function change_edge_head_and_continue() {
	if(actual_action_type_id == 1) {
		//pass
	} else {
		edge_output.style("opacity", 0.25);
		edge_output_text.style("opacity", 0.25);
	}


	d3.select("#lstm_to_tile").style("opacity", 1.0);
	path_lstm_to_tile.attr("stroke-dasharray", path_lstm_to_tile_length + " " + path_lstm_to_tile_length).attr("stroke-dashoffset", path_lstm_to_tile_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", tile_head_to_logits_p1);
}


function tile_head_to_logits_p1() {
	d3.select("#tile_to_logits").style("opacity", 1.0);
	path_tile_to_logits.attr("stroke-dasharray", path_tile_to_logits_length + " " + path_tile_to_logits_length).attr("stroke-dashoffset", path_tile_to_logits_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_tile_logits);

	move_robber_mask.attr("class", "active_mask");
}


function draw_tile_logits(include_crosses=false) {

	for(i=0; i<7; i++) {
		tile_logits[i].style("fill-opacity", tile_logits_vals[i])
		if(include_crosses) {
			if(action_masks["tile"][i]==0) {
				tile_logit_crosses_1[i].style("opacity", 1.0);
				tile_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				tile_logit_crosses_1[i].style("opacity", 0.0);
				tile_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}


function sampleTileLogitsNoMask() {
	logits = [];
	for(i=0; i < 7; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<7; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<7; i++) {
		tile_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}


function applyMasksToTileLogits() {
	prob_sum = 0.0

	mask_to_use = "tile";

	for(i=0; i<7; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += tile_logits_vals[i];
		} else {
			tile_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<7; i++) {
		tile_logits_vals[i] /= prob_sum;
	}
}


function initial_draw_tile_logits() {
	for(i=0; i<7; i++) {
		tile_logits[i].transition().style("fill", "green");
	}
	draw_tile_logits();

	mask_path = path_move_robber_mask_to_logits;
	mask_len = path_move_robber_mask_to_logits_length;

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_tile_logits_with_mask);
}


function sample_tile() {
	tile_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<7; i++) {
		prob_sum += tile_logits_vals[i];
		if (random_num < prob_sum) {
			tile_id = i;
			break;
		}
	}
	return String(tile_id)
}

function draw_tile_logits_with_mask() {
	applyMasksToTileLogits();
	draw_tile_logits(include_crosses=true);

	actual_tile_text = sample_tile();
	tile_logits[parseInt(actual_tile_text)].style("stroke-width", 3);

	d3.select("#tile_logits_to_output").style("opacity", 1.0);
	path_tile_logits_to_output.attr("stroke-dasharray", path_tile_logits_to_output_length + " " + path_tile_logits_to_output_length).attr("stroke-dashoffset", path_tile_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_tile_output_text);
}

function fill_in_tile_output_text() {
	tile_output_text.text("Tile " + actual_tile_text)
	text_width = tile_output_text.node().getBBox().width;
	tile_output_text.attr("x", tile_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3);

	d3.select("#type_output_to_tile_output").style("opacity", 1.0);
	path_type_output_to_tile_output.attr("stroke-dasharray", path_type_output_to_tile_output_length + " " + path_type_output_to_tile_output_length).attr("stroke-dashoffset", path_type_output_to_tile_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_tile_head_and_continue);
}

function change_tile_head_and_continue() {
	if(actual_action_type_id == 8) {
		//pass
	} else {
		tile_output.style("opacity", 0.25);
		tile_output_text.style("opacity", 0.25);
	}


	d3.select("#lstm_to_devcard").style("opacity", 1.0);
	path_lstm_to_devcard.attr("stroke-dasharray", path_lstm_to_devcard_length + " " + path_lstm_to_devcard_length).attr("stroke-dashoffset", path_lstm_to_devcard_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", devcard_head_to_logits_p1);
}

function devcard_head_to_logits_p1() {
	d3.select("#devcard_to_logits").style("opacity", 1.0);
	path_devcard_to_logits.attr("stroke-dasharray", path_devcard_to_logits_length + " " + path_devcard_to_logits_length).attr("stroke-dashoffset", path_devcard_to_logits_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_devcard_logits);

	devcard_mask.attr("class", "active_mask");
}


function sampleDevCardLogitsNoMask() {
	logits = [];
	for(i=0; i < 5; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<5; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<5; i++) {
		devcard_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}

function draw_devcard_logits(include_crosses=false) {
	for(i=0; i<5; i++) {
		devcard_logits[i].style("fill-opacity", devcard_logits_vals[i])
		if(include_crosses) {
			if(action_masks["devcard"][i]==0) {
				devcard_logit_crosses_1[i].style("opacity", 1.0);
				devcard_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				devcard_logit_crosses_1[i].style("opacity", 0.0);
				devcard_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}


function applyMasksToDevcardLogits() {
	prob_sum = 0.0

	mask_to_use = "devcard";

	for(i=0; i<5; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += devcard_logits_vals[i];
		} else {
			devcard_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<5; i++) {
		devcard_logits_vals[i] /= prob_sum;
	}
}


function initial_draw_devcard_logits() {
	for(i=0; i<5; i++) {
		devcard_logits[i].transition().style("fill", "green");
	}
	draw_devcard_logits();

	mask_path = path_devcard_mask_to_logits;
	mask_len = path_devcard_mask_to_logits_length;

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_devcard_logits_with_mask);
}


function sample_devcard() {
	devcard_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<5; i++) {
		prob_sum += devcard_logits_vals[i];
		if(random_num < prob_sum) {
			devcard_id = i;
			break;
		}
	}
	if(devcard_id==-1) {
		devcard_id = 4;
	}

	if(devcard_id == 0) {
		devcard_text = "Knight"
	} else if(devcard_id == 1) {
		devcard_text = "Victory Point"
	} else if(devcard_id == 2) {
		devcard_text = "Road Building"
	} else if(devcard_id == 3) {
		devcard_text = "Monopoly"
	} else if(devcard_id == 4) {
		devcard_text = "Year of Plenty"
	}

	return [devcard_id, devcard_text]
}

function draw_devcard_logits_with_mask() {
	applyMasksToDevcardLogits();
	draw_devcard_logits(include_crosses=true);

	actual_devcard = sample_devcard();
	actual_devcard_id = actual_devcard[0];
	actual_devcard_text = actual_devcard[1];

	devcard_logits[actual_devcard_id].style("stroke-width", 3);

	d3.select("#devcard_logits_to_output").style("opacity", 1.0);
	path_devcard_logits_to_output.attr("stroke-dasharray", path_devcard_logits_to_output_length + " " + path_devcard_logits_to_output_length).attr("stroke-dashoffset", path_devcard_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_devcard_output_text);
}


function fill_in_devcard_output_text() {

	devcard_output_text.text(actual_devcard_text)
	text_width = devcard_output_text.node().getBBox().width;
	devcard_output_text.attr("x", devcard_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3);

	d3.select("#type_output_to_devcard_output").style("opacity", 1.0);
	path_type_output_to_devcard_output.attr("stroke-dasharray", path_type_output_to_devcard_output_length + " " + path_type_output_to_devcard_output_length).attr("stroke-dashoffset", path_type_output_to_devcard_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_devcard_head_and_continue);
}


function change_devcard_head_and_continue() {
	if(actual_action_type_id == 4) {
		//pass
	} else {
		devcard_output.style("opacity", 0.25);
		devcard_output_text.style("opacity", 0.25);
	}

	transform = d3.select('#action-space-app g').attr("transform");

	if(transform == null) {
		d3.select('#action-space-app').transition().call(zoom.translateBy, -700, 0).duration(1000).on("end", start_accept_reject_animation);
	} else{
		values = transform.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
		if(values[0] == 0 && values[1] == 0 && values[2] == 1) {
			d3.select('#action-space-app').transition().call(zoom.translateBy, -700, 0).duration(1000).on("end", start_accept_reject_animation);
		} else {
			start_accept_reject_animation();
		}
	}
}

function start_accept_reject_animation() {
	d3.select("#lstm_to_respond").style("opacity", 1.0);
	path_lstm_to_acceptreject.attr("stroke-dasharray", path_lstm_to_acceptreject_length + " " + path_lstm_to_acceptreject_length).attr("stroke-dashoffset", path_lstm_to_acceptreject_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	d3.select("#prop_trade_to_respond").style("opacity", 1.0);
	path_prop_trade_to_respond_head.attr("stroke-dasharray", path_prop_trade_to_respond_head_length + " " + path_prop_trade_to_respond_head_length).attr("stroke-dashoffset", path_prop_trade_to_respond_head_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", respond_head_to_logits_p1);

}

function respond_head_to_logits_p1() {
	d3.select("#respond_to_logits").style("opacity", 1.0);
	path_respond_to_logits.attr("stroke-dasharray", path_respond_to_logits_length + " " + path_respond_to_logits_length).attr("stroke-dashoffset", path_respond_to_logits_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_respond_logits);

	response_mask.attr("class", "active_mask");
}

function draw_respond_logits(include_crosses=false) {
	for(i=0; i<2; i++) {
		respond_logits[i].style("fill-opacity", respond_logits_vals[i])
		if(include_crosses) {
			if(action_masks["respond"][i]==0) {
				respond_logit_crosses_1[i].style("opacity", 1.0);
				respond_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				respond_logit_crosses_1[i].style("opacity", 0.0);
				respond_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}


function sampleRespondLogitsNoMask() {
	logits = [];
	for(i=0; i < 2; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<2; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<2; i++) {
		respond_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}


function applyMasksToRespondLogits() {
	prob_sum = 0.0
	mask_to_use = "respond"

	for(i=0; i<2; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += respond_logits_vals[i];
		} else {
			respond_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<2; i++) {
		respond_logits_vals[i] /= prob_sum;
	}
}


function initial_draw_respond_logits() {
	for(i=0; i<2; i++) {
		respond_logits[i].transition().style("fill", "green");
	}
	draw_respond_logits();

	mask_path = path_respond_mask_to_logits;
	mask_len = path_respond_mask_to_logits_length;

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_response_logits_with_mask);
}


function sample_response() {
	respond_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<2; i++) {
		prob_sum += respond_logits_vals[i];
		if(random_num < prob_sum) {
		respond_id = i;
			break;
		}
	}
	if(respond_id==-1) {
		respond_id = 1;
	}

	if(respond_id == 0) {
		respond_text = "Accept"
	} else if(respond_id == 1) {
		respond_text = "Reject"
	}

	return [respond_id, respond_text]
}


function draw_response_logits_with_mask() {
	applyMasksToRespondLogits();
	draw_respond_logits(include_crosses=true);

	actual_response = sample_response();
	actual_respond_id = actual_response[0];
	actual_respond_text = actual_response[1];

	respond_logits[actual_respond_id].style("stroke-width", 3);

	d3.select("#respond_logits_to_output").style("opacity", 1.0);
	path_respond_logits_to_output.attr("stroke-dasharray", path_respond_logits_to_output_length + " " + path_respond_logits_to_output_length).attr("stroke-dashoffset", path_respond_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_response_output_text);
}


function fill_in_response_output_text() {

	respond_output_text.text(actual_respond_text)
	text_width = respond_output_text.node().getBBox().width;
	respond_output_text.attr("x", respond_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3);

	d3.select("#type_output_to_respond_output").style("opacity", 1.0);
	path_type_output_to_respond_output.attr("stroke-dasharray", path_type_output_to_respond_output_length + " " + path_type_output_to_respond_output_length).attr("stroke-dashoffset", path_type_output_to_respond_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_respond_head_and_continue);
}

function change_respond_head_and_continue() {
	if(actual_action_type_id == 7) {
		//pass
	} else {
		respond_output.style("opacity", 0.25);
		respond_output_text.style("opacity", 0.25);
	}

	d3.select("#lstm_to_player").style("opacity", 1.0);

	path_lstm_to_player.attr("stroke-dasharray", path_lstm_to_player_length + " " + path_lstm_to_player_length).attr("stroke-dashoffset", path_lstm_to_player_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	d3.select("#type_output_to_player_head").style("opacity", 1.0);
	path_type_output_to_player.attr("stroke-dasharray", path_type_output_to_player_length + " " + path_type_output_to_player_length).attr("stroke-dashoffset", path_type_output_to_player_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", player_head_to_logits_and_masks);
}

function player_head_to_logits_and_masks() {
	d3.select("#player_to_logits").style("opacity", 1.0);
	path_player_to_logits.attr("stroke-dasharray", path_player_to_logits_length + " " + path_player_to_logits_length).attr("stroke-dashoffset", path_player_to_logits_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_player_logits);

	d3.select("#extend_type_out_to_player_mask").style("opacity", 1.0);
	path_extend_type_to_player_mask.attr("stroke-dasharray", path_extend_type_to_player_mask_length + " " + path_extend_type_to_player_mask_length).attr("stroke-dashoffset", path_extend_type_to_player_mask_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

}

function samplePlayerLogitsNoMask() {
	logits = [];
	for(i=0; i < 3; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<3; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<3; i++) {
		player_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}

function draw_player_logits(include_crosses=false) {
	for(i=0; i<3; i++) {
		player_logits[i].style("fill-opacity", player_logits_vals[i])
		if(include_crosses) {
			if(actual_action_type_id == 11) {
				mask_to_use = "player"
			} else {
				mask_to_use = "dummy_player"
			}
			if(action_masks[mask_to_use][i]==0) {
				player_logit_crosses_1[i].style("opacity", 1.0);
				player_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				player_logit_crosses_1[i].style("opacity", 0.0);
				player_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}

function applyMasksToPlayerLogits() {
	prob_sum = 0.0

	if(actual_action_type_id==11) {
		mask_to_use = "player"
	} else {
		mask_to_use = "dummy_player"
	}

	for(i=0; i<3; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += player_logits_vals[i];
		} else {
			player_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<3; i++) {
		player_logits_vals[i] /= prob_sum;
	}
}


function initial_draw_player_logits() {
	if(actual_action_type_id == 11) {
		mask_to_change = player_steal_mask
	} else {
		mask_to_change = player_dummy_mask
	}

	mask_to_change.attr("class", "active_mask");

	for(i=0; i<3; i++) {
		player_logits[i].transition().style("fill", "green");
	}
	draw_player_logits();

	if(actual_action_type_id == 11) {
		mask_path = path_steal_from_mask_to_logits
		mask_len = path_steal_from_mask_to_logits_length
	} else {
		mask_path = path_dummy_player_mask_to_logits
		mask_len = path_dummy_player_mask_to_logits_length
	}

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_player_logits_with_mask);
}


function sample_player() {
	player_id = -1
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<3; i++) {
		prob_sum += player_logits_vals[i];
		if(random_num < prob_sum) {
			player_id = i;
			break;
		}
	}
	
	if(player_id == 0) {
		player_text = "Clockwise +1"
	} else if(player_id == 1) {
		player_text = "Clockwise + 2"
	} else if(player_id == 2) {
		player_text = "Clockwise + 3"
	}

	return [player_id, player_text]
}

function draw_player_logits_with_mask() {
	applyMasksToPlayerLogits();
	draw_player_logits(include_crosses=true);

	actual_player = sample_player();
	actual_player_id = actual_player[0];
	actual_player_text = actual_player[1];

	player_logits[actual_player_id].style("stroke-width", 3);

	d3.select("#player_logits_to_output").style("opacity", 1.0);
	path_player_logits_to_output.attr("stroke-dasharray", path_player_logits_to_output_length + " " + path_player_logits_to_output_length).attr("stroke-dashoffset", path_player_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_player_output_text);
}


function fill_in_player_output_text() {
	player_output_text.text(actual_player_text);
	text_width = player_output_text.node().getBBox().width;
	player_output_text.attr("x", player_output_x + action_out_width / 2.0 - text_width / 2.0).attr("y", action_output_y + action_out_height / 2.0 + 3);

	d3.select("#type_output_to_player_output").style("opacity", 1.0);
	path_type_output_to_player_output.attr("stroke-dasharray", path_type_output_to_player_output_length + " " + path_type_output_to_player_output_length).attr("stroke-dashoffset", path_type_output_to_player_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_player_head_and_continue);
}


function change_player_head_and_continue() {
	if(actual_action_type_id == 6 || actual_action_type_id == 11) {
		//pass
	} else {
		player_output.style("opacity", 0.25);
		player_output_text.style("opacity", 0.25);
	}

	d3.select("#lstm_to_res1").style("opacity", 1.0);
	d3.select("#type_output_to_res1_head").style("opacity", 1.0);
	d3.select("#dev_output_to_res1_head").style("opacity", 1.0);

	path_type_output_to_res1.attr("stroke-dasharray", path_type_output_to_res1_length + " " + path_type_output_to_res1_length).attr("stroke-dashoffset", path_type_output_to_res1_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	path_lstm_to_resource1.attr("stroke-dasharray", path_lstm_to_resource1_length + " " + path_lstm_to_resource1_length).attr("stroke-dashoffset", path_lstm_to_resource1_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	path_devout_to_res1_head.attr("stroke-dasharray", path_devout_to_res1_head_length + " " + path_devout_to_res1_head_length).attr("stroke-dashoffset", path_devout_to_res1_head_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", res1_head_to_logits_and_masks);
}

function res1_head_to_logits_and_masks() {
	d3.select("#res1_to_logits").style("opacity", 1.0);
	path_res1_to_logits.attr("stroke-dasharray", path_res1_to_logits_length + " " + path_res1_to_logits_length).attr("stroke-dashoffset", path_res1_to_logits_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_res1_logits);

	d3.select("#type_output_to_res1_masks").style("opacity", 1.0);
	path_type_to_res1_masks.attr("stroke-dasharray", path_type_to_res1_masks_length + " " + path_type_to_res1_masks_length).attr("stroke-dashoffset", path_type_to_res1_masks_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
}

function sampleRes1LogitsNoMask() {
	logits = [];
	for(i=0; i < 5; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<5; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<5; i++) {
		res1_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}

function draw_res1_logits(include_crosses=false) {
	for(i=0; i<5; i++) {
		res1_logits[i].style("fill-opacity", res1_logits_vals[i])
		if(include_crosses) {
			if(actual_action_type_id == 5) {
				mask_to_use = "exchange"
			} else if(actual_action_type_id == 4) {
				if(actual_devcard_id == 3) {
					mask_to_use = "monopoly"
				} else if(actual_devcard_id == 4) {
					mask_to_use = "yop"
				} else {
					mask_to_use = "dummy_res1"
				}
			} else {
				mask_to_use = "dummy_res1"
			}
			if(action_masks[mask_to_use][i]==0) {
				res1_logit_crosses_1[i].style("opacity", 1.0);
				res1_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				res1_logit_crosses_1[i].style("opacity", 0.0);
				res1_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}

function applyMasksToRes1Logits() {
	prob_sum = 0.0

	if(actual_action_type_id==5) {
		mask_to_use = "exchange"
	} else if(actual_action_type_id == 4) {
		if(actual_devcard_id == 3) {
			mask_to_use = "monopoly"
		} else if(actual_devcard_id == 4) {
			mask_to_use = "yop"
		} else {
			mask_to_use = "dummy_res1"
		}
	} else {
		mask_to_use = "dummy_res1"
	}

	for(i=0; i<5; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += res1_logits_vals[i];
		} else {
			res1_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<5; i++) {
		res1_logits_vals[i] /= prob_sum;
	}
}

function initial_draw_res1_logits() {
	if(actual_action_type_id==5) {
		mask_to_change = res1_exchange_mask
		mask_path = path_exchange_mask_to_logits
		mask_len = path_exchange_mask_to_logits_length
	} else if(actual_action_type_id == 4) {
		if(actual_devcard_id == 3) {
			mask_to_change = res1_monopoly_mask
			mask_path = path_monopoly_mask_to_logits
			mask_len = path_monopoly_mask_to_logits_length
		} else if(actual_devcard_id == 4) {
			mask_to_change = res1_yop_mask
			mask_path = path_yop_mask_to_logits
			mask_len = path_yop_mask_to_logits_length
		} else {
			mask_to_change = res1_dummy_mask
			mask_path = path_res1dummy_mask_to_logits
			mask_len = path_res1dummy_mask_to_logits_length
		}
	} else {
		mask_to_change = res1_dummy_mask
		mask_path = path_res1dummy_mask_to_logits
		mask_len = path_res1dummy_mask_to_logits_length
	}

	mask_to_change.attr("class", "active_mask");

	for(i=0; i<5; i++) {
		res1_logits[i].transition().style("fill", "green");
	}
	draw_res1_logits();

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_res1_logits_with_mask);
}


function sample_res1() {
	res1_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<5; i++) {
		prob_sum += res1_logits_vals[i];
		if(random_num < prob_sum) {
			res1_id = i;
			break;
		}
	}

	return res1_id
}

function draw_res1_logits_with_mask() {
	applyMasksToRes1Logits();
	draw_res1_logits(include_crosses=true);

	actual_res1_id = sample_res1();

	res1_logits[actual_res1_id].style("stroke-width", 3);

	d3.select("#res1_logits_to_output").style("opacity", 1.0);
	path_res1_logits_to_output.attr("stroke-dasharray", path_res1_logits_to_output_length + " " + path_res1_logits_to_output_length).attr("stroke-dashoffset", path_res1_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_res1_output);
}

function fill_in_res1_output() {
	res_img_size = res_img_width * 1.3;
	res_img_x = res1_output_x + action_out_width/2.0 - (res_img_size/2.0);
	res_img_y = action_output_y + (action_out_height/2.0) - (res_img_size/2.0);

	g_action_head.append("svg:image").attr("x", res_img_x).attr("y", res_img_y).attr("width", res_img_size).attr("height", res_img_size).attr("id", "res_1_img").attr("xlink:href", res_images[actual_res1_id]);

	d3.select("#type_output_to_res1_output").style("opacity", 1.0);
	path_type_output_to_res1_output.attr("stroke-dasharray", path_type_output_to_res1_output_length + " " + path_type_output_to_res1_output_length).attr("stroke-dashoffset", path_type_output_to_res1_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_res1_head_and_continue);

	d3.select("#extend_devout_to_res1_output").style("opacity", 1.0);
	path_extend_devout_to_res1_output.attr("stroke-dasharray", path_extend_devout_to_res1_output_length + " " + path_extend_devout_to_res1_output_length).attr("stroke-dashoffset", path_extend_devout_to_res1_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0)
}

function change_res1_head_and_continue() {
	if(actual_action_type_id == 5) {
		//pass
	} else if(actual_action_type_id == 4) {
		if(actual_devcard_id == 4 || actual_devcard_id == 3) {
			//pass
		} else {
			res1_output.style("opacity", 0.25);
			d3.select("#res_1_img").style("opacity", 0.25);
		}
	} else {
		res1_output.style("opacity", 0.25);
		d3.select("#res_1_img").style("opacity", 0.25);
	}

	transform = d3.select("#action-space-app g").attr("transform");
	if(transform == null) {
		start_res2_animation();
	} else {
		values = transform.match(/[+-]?\d+(?:\.\d+)?/g).map(Number);
		if(Math.abs(values[0] + 700) < 0.1 && Math.abs(values[1]) < 0.1 && Math.abs(values[2]-1) < 0.01) {
			d3.select('#action-space-app').transition().call(zoom.translateBy, -750, 0).duration(1000).on("end", start_res2_animation);
		} else {
			start_res2_animation();
		}
	}
}

function start_res2_animation() {
	d3.select("#lstm_to_res2").style("opacity", 1.0);
	path_lstm_to_resource2.attr("stroke-dasharray", path_lstm_to_resource2_length + " " + path_lstm_to_resource2_length).attr("stroke-dashoffset", path_lstm_to_resource2_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	d3.select("#type_output_to_res2_head").style("opacity", 1.0);
	path_type_output_to_res2.attr("stroke-dasharray", path_type_output_to_res2_length + " " + path_type_output_to_res2_length).attr("stroke-dashoffset", path_type_output_to_res2_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", res2_head_to_logits_p1);

	d3.select("#dev_output_to_res2_head").style("opacity", 1.0);
	path_devout_to_res2_head.attr("stroke-dasharray", path_devout_to_res2_head_length + " " + path_devout_to_res2_head_length).attr("stroke-dashoffset", path_devout_to_res2_head_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
}

function res2_head_to_logits_p1() {
	d3.select("#res2_to_logits").style("opacity", 1.0);
	path_res2_to_logits.attr("stroke-dasharray", path_res2_to_logits_length + " " + path_res2_to_logits_length).attr("stroke-dashoffset", path_res2_to_logits_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_res2_logits);

		res2_inbank_mask.attr("class", "active_mask");
}

function sampleRes2LogitsNoMask() {
	logits = [];
	for(i=0; i < 5; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<5; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<5; i++) {
		res2_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}

function draw_res2_logits(include_crosses=false) {
	for(i=0; i<5; i++) {
		res2_logits[i].style("fill-opacity", res2_logits_vals[i])
		if(include_crosses) {
			if(action_masks["res2"][i]==0) {
				res2_logit_crosses_1[i].style("opacity", 1.0);
				res2_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				res2_logit_crosses_1[i].style("opacity", 0.0);
				res2_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}

function applyMasksToRes2Logits() {
	prob_sum = 0.0

	mask_to_use = "res2";

	for(i=0; i<5; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += res2_logits_vals[i];
		} else {
			res2_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<5; i++) {
		res2_logits_vals[i] /= prob_sum;
	}
}

function initial_draw_res2_logits() {
	for(i=0; i<5; i++) {
		res2_logits[i].transition().style("fill", "green");
	}
	draw_res2_logits();

	mask_path = path_inbank_mask_to_logits
	mask_len = path_inbank_mask_to_logits_length

	mask_path.style("opacity", 1.0)
	mask_path.attr("stroke-dasharray", mask_len + " " + mask_len).attr("stroke-dashoffset", mask_len).transition()
		.duration(500).delay(200).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_res2_logits_with_mask);
}


function sample_res2() {
	res2_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<5; i++) {
		prob_sum += res2_logits_vals[i];
		if(random_num < prob_sum) {
			res2_id = i;
			break;
		}
	}

	return res2_id
}

function draw_res2_logits_with_mask() {
	applyMasksToRes2Logits();
	draw_res2_logits(include_crosses=true);

	actual_res2_id = sample_res2();

	res2_logits[actual_res2_id].style("stroke-width", 3);

	d3.select("#res2_logits_to_output").style("opacity", 1.0);
	path_res2_logits_to_output.attr("stroke-dasharray", path_res2_logits_to_output_length + " " + path_res2_logits_to_output_length).attr("stroke-dashoffset", path_res2_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", fill_in_res2_output);
}


function fill_in_res2_output() {
	res_img_size = res_img_width * 1.3;
	res_img_x = res2_output_x + action_out_width/2.0 - (res_img_size/2.0);
	res_img_y = action_output_y + (action_out_height/2.0) - (res_img_size/2.0);

	g_action_head.append("svg:image").attr("x", res_img_x).attr("y", res_img_y).attr("width", res_img_size).attr("height", res_img_size).attr("id", "res_2_img").attr("xlink:href", res_images[actual_res2_id]);

	d3.select("#type_output_to_res2_output").style("opacity", 1.0);
	path_type_output_to_res2_output.attr("stroke-dasharray", path_type_output_to_res2_output_length + " " + path_type_output_to_res2_output_length).attr("stroke-dashoffset", path_type_output_to_res2_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_res2_head_and_continue);

	d3.select("#extend_devout_to_res2_output").style("opacity", 1.0);
	path_extend_devout_to_res2_output.attr("stroke-dasharray", path_extend_devout_to_res2_output_length + " " + path_extend_devout_to_res2_output_length).attr("stroke-dashoffset", path_extend_devout_to_res2_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);
}

function change_res2_head_and_continue() {
	if(actual_action_type_id == 5 || (actual_action_type_id==4 && actual_devcard_id==4)) {
		//pass
	} else {
		res2_output.style("opacity", 0.25);
		d3.select("#res_2_img").style("opacity", 0.25);
	}

	initialise_propose_trade();
}

function initialise_propose_trade() {
	d3.select("#lstm_to_proptrade").style("opacity", 1.0);
	path_lstm_to_proptrade.attr("stroke-dasharray", path_lstm_to_proptrade_length + " " + path_lstm_to_proptrade_length).attr("stroke-dashoffset", path_lstm_to_proptrade_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	d3.select("#currres_to_proptrade").style("opacity", 1.0);
	path_curr_res_to_proptrade.attr("stroke-dasharray", path_curr_res_to_proptrade_length + " " + path_curr_res_to_proptrade_length).attr("stroke-dashoffset", path_curr_res_to_proptrade_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	d3.select("#currres_to_proptrade_mask").style("opacity", 1.0);
	path_curr_res_to_proptrade_mask.attr("stroke-dasharray", path_curr_res_to_proptrade_mask_length + " " + path_curr_res_to_proptrade_mask_length).attr("stroke-dashoffset", path_curr_res_to_proptrade_mask_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", propose_trade_outer_loop);
}

function samplePropGiveLogitsNoMask() {
	logits = [];
	for(i=0; i < 6; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<6; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<6; i++) {
		prop_give_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}

function draw_propgive_logits(include_crosses=false) {
	for(i=0; i<6; i++) {
		prop_give_logits[i].style("fill-opacity", prop_give_logits_vals[i])
		if(include_crosses) {
			if(action_masks["prop_give"][i]==0) {
				prop_give_logit_crosses_1[i].style("opacity", 1.0);
				prop_give_logit_crosses_2[i].style("opacity", 1.0);
			} else {
				prop_give_logit_crosses_1[i].style("opacity", 0.0);
				prop_give_logit_crosses_2[i].style("opacity", 0.0);
			}
		}
	}
}

function applyMasksToPropGiveLogits() {
	prob_sum = 0.0

	mask_to_use = "prop_give";

	if(actual_action_type_id != 6) {
		for(i=0; i<5; i++) {
			action_masks["prop_give"][i] = 0
		}
	}
	action_masks["prop_give"][5] = 1;

	for(i=0; i<6; i++) {
		if (action_masks[mask_to_use][i] == 1) {
			prob_sum += prop_give_logits_vals[i];
		} else {
			prop_give_logits_vals[i] = 0.0;
		}
	}

	for(i=0; i<6; i++) {
		prop_give_logits_vals[i] /= prob_sum;
	}
}

function propose_trade_outer_loop() {
	for(i=0; i<5; i++) {
		current_resource_mask_texts[i].style("opacity", 1.0);
	}
	prop_give_mask.attr("class", "active_mask");
	updateCurrentResourceValues();

	propose_trade_inner_loop();
}


function propose_trade_inner_loop() {
	if(number_proposed_loop >= max_trade_loops || terminate_propose_loop) {
		continue_after_proposed_trade();
		return;
	}

	d3.select("#trade_give_to_logits").style("opacity", 0.0);
	d3.select("#currres_mask_to_logits").style("opacity", 0.0);
	d3.select("#trade_give_logits_to_output").style("opacity", 0.0);

	for(i=0; i<6;i++) {
		prop_give_logits[i].style("fill", "white").style("opacity", 1.0).style("stroke-width", 1);
	}

	for(i=0; i<6; i++) {
		prop_give_logit_crosses_1[i].style("opacity", 0.0);
		prop_give_logit_crosses_2[i].style("opacity", 0.0);
	}


	d3.select("#trade_give_output_to_head").style("opacity", 1.0);
	path_trade_output_to_head.attr("stroke-dasharray", path_trade_output_to_head_length + " " + path_trade_output_to_head_length).attr("stroke-dashoffset", path_trade_output_to_head_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", propgive_to_logits);
}

function propgive_to_logits() {
	d3.select("#trade_give_to_logits").style("opacity", 1.0);
	path_trade_give_to_logits.attr("stroke-dasharray", path_trade_give_to_logits_length + " " + path_trade_give_to_logits_length).attr("stroke-dashoffset", path_trade_give_to_logits_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_propgive_logits);
}

function initial_draw_propgive_logits() {
	for(i=0; i<6; i++) {
		prop_give_logits[i].transition().style("fill", "green");
	}
	samplePropGiveLogitsNoMask();

	draw_propgive_logits();

	d3.select("#currres_mask_to_logits").style("opacity", 1.0);
	path_currres_mask_to_logits.attr("stroke-dasharray", path_currres_mask_to_logits_length + " " + path_currres_mask_to_logits_length).attr("stroke-dashoffset", path_currres_mask_to_logits_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", draw_propgive_logits_with_mask);
}

function sample_prop_give() {
	propgive_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<6; i++) {
		prob_sum += prop_give_logits_vals[i];
		if(random_num < prob_sum) {
			propgive_id = i;
			break;
		}
	}
	return propgive_id
}

function draw_propgive_logits_with_mask() {
	applyMasksToPropGiveLogits();
	draw_propgive_logits(include_crosses=true);

	propgive_id = sample_prop_give();
	if(propgive_id == 5) {
		terminate_propose_loop = true;
	} else {
		current_proposed_resources[propgive_id] += 1
		current_resource_values[propgive_id] -= 1
	}

	prop_give_logits[propgive_id].style("stroke-width", 3);

	d3.select("#trade_give_logits_to_output").style("opacity", 1.0);
	path_trade_give_logits_to_output.attr("stroke-dasharray", path_trade_give_logits_to_output_length + " " + path_trade_give_logits_to_output_length).attr("stroke-dashoffset", path_trade_give_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", update_prop_give_values_and_continue);
}

function update_prop_give_values_and_continue() {
	updateCurrentResourceValues();
	updateCurrentResMasks();
	draw_proposed_resources_action();

	number_proposed_loop += 1;

	propose_trade_inner_loop();
}

function continue_after_proposed_trade() {
	d3.select("#type_output_to_trade_give_output").style("opacity", 1.0);
	path_type_output_to_trade_give_output.attr("stroke-dasharray", path_type_output_to_trade_give_output_length + " " + path_type_output_to_trade_give_output_length).attr("stroke-dashoffset", path_type_output_to_trade_give_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_prop_give_head_and_continue);
}

function change_prop_give_head_and_continue() {
	if(actual_action_type_id == 6) {
		//pass
	} else {
		prop_give_output.style("opacity", 0.25);
		for(i=0; i<5; i++) {
			current_proposed_resources_texts[i].style("opacity", 0.25);
			d3.selectAll(".propgive_output_images").style("opacity", 0.25);
		}
	}
	initial_receive_trade();
}

function initial_receive_trade() {
	d3.select("#lstm_to_receivetrade").style("opacity", 1.0);
	path_lstm_to_receivetrade.attr("stroke-dasharray", path_lstm_to_receivetrade_length + " " + path_lstm_to_receivetrade_length).attr("stroke-dashoffset", path_lstm_to_receivetrade_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0);

	d3.select("#trade_give_output_to_trade_rec").style("opacity", 1.0);
	path_trade_give_out_to_trade_rec.attr("stroke-dasharray", path_trade_give_out_to_trade_rec_length + " " + path_trade_give_out_to_trade_rec_length).attr("stroke-dashoffset", path_trade_give_out_to_trade_rec_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", receive_trade_inner_loop);
}

function samplePropRecLogitsNoMask() {
	logits = [];
	for(i=0; i < 6; i++) {
		temp_logit = 3 * Math.random()
		logits.push(temp_logit);
	}
	max_logit = Math.max.apply(Math, logits)
	log_sum_exp = 0.0
	for(i=0; i<6; i++) {
		log_sum_exp += Math.exp(logits[i] - max_logit)
	}
	log_sum_exp = Math.log(log_sum_exp) + max_logit
	for(i=0; i<6; i++) {
		prop_rec_logits_vals[i] = Math.exp(logits[i] - log_sum_exp)
	}
}

function draw_proprec_logits() {
	for(i=0; i<6; i++) {
		prop_rec_logits[i].style("fill-opacity", prop_rec_logits_vals[i])
	}
}

function sample_prop_rec() {
	proprec_id = -1;
	prob_sum = 0.0;
	random_num = Math.random();
	for(i=0; i<6; i++) {
		prob_sum += prop_rec_logits_vals[i];
		if(random_num < prob_sum) {
			proprec_id = i;
			break;
		}
	}
	return proprec_id
}

function receive_trade_inner_loop() {
	if(number_receive_loop >= max_trade_loops || terminate_receive_loop || (number_receive_loop==1 && actual_action_type_id != 6)) {
		continue_after_receive_trade();
		return;
	}

	d3.select("#trade_rec_to_logits").style("opacity", 0.0);
	d3.select("#trade_rec_logits_to_output").style("opacity", 0.0);

	for(i=0; i<6; i++) {
		prop_rec_logits[i].style("fill", "white").style("opacity", 1.0).style("stroke-width", 1);
	}

	d3.select("#trade_rec_output_to_head").style("opacity", 1.0);
	path_trade_rec_output_to_head.attr("stroke-dasharray", path_trade_rec_output_to_head_length + " " + path_trade_rec_output_to_head_length).attr("stroke-dashoffset", path_trade_rec_output_to_head_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", proprec_to_logits);
}

function proprec_to_logits() {
	d3.select("#trade_rec_to_logits").style("opacity", 1.0);
	path_trade_give_to_logits.attr("stroke-dasharray", path_trade_give_to_logits_length + " " + path_trade_give_to_logits_length).attr("stroke-dashoffset", path_trade_give_to_logits_length).transition()
	.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", initial_draw_prop_rec_logits);
}

function initial_draw_prop_rec_logits() {
	for(i=0; i<6; i++){
		prop_rec_logits[i].transition().style("fill", "green");
	}
	samplePropRecLogitsNoMask();
	draw_proprec_logits();

	proprec_id = sample_prop_rec();
	if(proprec_id == 5) {
		terminate_receive_loop = true;
	} else {
		current_receive_resources[proprec_id] += 1
	}

	prop_rec_logits[proprec_id].style("stroke-width", 3);

	d3.select("#trade_rec_logits_to_output").style("opacity", 1.0);
	path_trade_rec_logits_to_output.attr("stroke-dasharray", path_trade_rec_logits_to_output_length + " " + path_trade_rec_logits_to_output_length).attr("stroke-dashoffset", path_trade_rec_logits_to_output_length).transition()
		.duration(400).delay(100).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", update_prop_rec_values_and_continue);
}

function update_prop_rec_values_and_continue() {
			draw_receive_resources_action();
			number_receive_loop += 1

			receive_trade_inner_loop();
}

function continue_after_receive_trade() {
	d3.select("#type_output_to_trade_rec_output").style("opacity", 1.0);
	path_type_output_to_trade_rec_output.attr("stroke-dasharray", path_type_output_to_trade_rec_output_length + " " + path_type_output_to_trade_rec_output_length).attr("stroke-dashoffset", path_type_output_to_trade_rec_output_length).transition()
		.duration(500).delay(150).ease(d3.easeLinear).attr("stroke-dashoffset", 0).on("end", change_prop_rec_head);
}

function change_prop_rec_head() {
	if(actual_action_type_id == 6) {
		//pass
	} else {
		prop_rec_output.style("opacity", 0.25);
		for(i=0; i<5; i++) {
			current_receive_resources_texts[i].style("opacity", 0.25);
			d3.selectAll(".proprec_output_images").style("opacity", 0.25);
		}
	}
}


function initialise() {
	d3.selectAll(".active_mask").attr("class", "inactive_mask")
	d3.selectAll("path").style("opacity", 0.0);
	d3.selectAll(".logit").style("fill", "white").style("opacity", 1.0).style("stroke-width", 1);


	for(i=0; i<12; i++) {
		action_logit_crosses_1[i].style("opacity", 0.0)
		action_logit_crosses_2[i].style("opacity", 0.0)
	}
	action_output_text.text("");

	for(i=0; i<24; i++) {
		corner_logit_crosses_1[i].style("opacity", 0.0);
		corner_logit_crosses_2[i].style("opacity", 0.0);
	}

	corner_output_text.text("");
	corner_output.style("opacity", 1.0);
	corner_output_text.style("opacity", 1.0);

	for(i=0; i<30; i++) {
		edge_logit_crosses_1[i].style("opacity", 0.0);
		edge_logit_crosses_2[i].style("opacity", 0.0);
	}

	edge_output_text.text("");
	edge_output.style("opacity", 1.0);
	edge_output_text.style("opacity", 1.0);

	for(i=0; i<7; i++) {
		tile_logit_crosses_1[i].style("opacity", 0.0);
		tile_logit_crosses_2[i].style("opacity", 0.0);
	}

	tile_output_text.text("");
	tile_output.style("opacity", 1.0);
	tile_output_text.style("opacity", 1.0);

	for(i=0; i<5; i++) {
		devcard_logit_crosses_1[i].style("opacity", 0.0);
		devcard_logit_crosses_2[i].style("opacity", 0.0);
	}

	devcard_output_text.text("");
	devcard_output.style("opacity", 1.0);
	devcard_output_text.style("opacity", 1.0);


	for(i=0; i<2; i++) {
		respond_logit_crosses_1[i].style("opacity", 0.0);
		respond_logit_crosses_2[i].style("opacity", 0.0);
	}

	respond_output_text.text("");
	respond_output.style("opacity", 1.0);
	respond_output_text.style("opacity", 1.0);

	for(i=0; i<3; i++) {
		player_logit_crosses_1[i].style("opacity", 0.0);
		player_logit_crosses_2[i].style("opacity", 0.0);
	}

	player_output_text.text("");
	player_output.style("opacity", 1.0);
	player_output_text.style("opacity", 1.0);

	res1_output.style("opacity", 1.0);
	d3.select("#res_1_img").remove();

	for(i=0; i<5; i++) {
		res1_logit_crosses_1[i].style("opacity", 0.0);
		res1_logit_crosses_2[i].style("opacity", 0.0);
	}

	res2_output.style("opacity", 1.0);
	d3.select("#res_2_img").remove();

	for(i=0; i<5; i++) {
		res2_logit_crosses_1[i].style("opacity", 0.0);
		res2_logit_crosses_2[i].style("opacity", 0.0);
	}

	for(i=0; i<6; i++) {
		prop_give_logit_crosses_1[i].style("opacity", 0.0);
		prop_give_logit_crosses_2[i].style("opacity", 0.0);
	}

	prop_give_output.style("opacity", 1.0);

	prop_rec_output.style("opacity", 1.0);

	current_proposed_resources = [0, 0, 0, 0, 0];
	current_receive_resources = [0, 0, 0, 0, 0];

	for(i=0; i<5; i++) {
		current_resource_values[i] = Math.floor(5*Math.random()-0.0000001)

		current_resource_mask_texts[i].style("opacity", 0.0);
	}
	updateCurrentResMasks();

	number_proposed_loop = 0;
	number_receive_loop = 0;

	terminate_propose_loop = false;
	terminate_receive_loop = false;


	sampleTypeLogitsNoMask();
	sampleCornerLogitsNoMask();
	sampleEdgeLogitsNoMask();
	sampleTileLogitsNoMask();
	sampleDevCardLogitsNoMask();
	sampleRespondLogitsNoMask();
	samplePlayerLogitsNoMask();
	sampleRes1LogitsNoMask();
	sampleRes2LogitsNoMask();

	draw_proposed_resources_action(initialise_images=false);
	draw_receive_resources_action(initialise_images=false);

	for(i=0; i<5; i++) {
			current_proposed_resources_texts[i].style("opacity", 1.0);
			d3.selectAll(".propgive_output_images").style("opacity", 1.0);

			current_receive_resources_texts[i].style("opacity", 1.0);
			d3.selectAll(".proprec_output_images").style("opacity", 1.0);
		}
}



function sample_action() {
	g_action_head.selectAll('*').interrupt().transition();
	initialise();
	start_type_head_animation();
}








initZoom();
randomise_action_masks();
draw_proposed_resources_action(initialise_images=true);
draw_receive_resources_action(initialise_images=true);
initialise();