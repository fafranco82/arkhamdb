(function app_format(format, $) {

/**
 * @memberOf format
 */
format.traits = function traits(card) {
	return card.traits || '';
};


/**
 * @memberOf format
 */
format.fancy_int = function traits(num) {
	var string = (num != null ? (num < 0 ? "X" : num) : '&ndash;')
	return string;
};

/**
 * @memberOf format
 */
format.name = function name(card) {
	var name = (card.is_unique ? '<span class="icon-unique"></span> ' : "") + card.name;
	if (card.subname){
		name += '<div class="card-subname small">'+card.subname+'</div>';
	}
	return name;
}

format.faction = function faction(card) {
	var text = '<span class="fg-'+card.faction_code+' icon-'+card.faction_code+'"></span> '+ card.faction_name + '. ';
	return text;
}

/**
 * @memberOf format
 */
format.pack = function pack(card) {
	var text = card.pack_name + ' #' + card.position + '. ';
	if (card.encounter_name){
		text += card.encounter_name;
		if (card.encounter_position){
			text += " #"+card.encounter_position;
			if (card.quantity > 1){
				text += "-";
				text += (card.encounter_position+card.quantity-1);
			}
		}
	}
	return text;
}

/**
 * @memberOf format
 */
format.info = function info(card) {
	var text = '';
	switch(card.type_code) {
		case 'agenda':
			text += '<div>'+Translator.trans('card.info.doom')+': '+format.fancy_int(card.doom)+'.</div>';
			break;
		case 'act':
			text += '<div>'+Translator.trans('card.info.clues')+': '+format.fancy_int(card.clues)+'.</div>';
			break;
		case 'enemy':
			text += '<div>'+Translator.trans('card.info.fight')+': '+format.fancy_int(card.enemy_fight)+'. '+Translator.trans('card.info.health')+': '+format.fancy_int(card.health)+'. '+Translator.trans('card.info.evade')+': '+format.fancy_int(card.enemy_evade)+'.</div>';
			text += '<div>'+Translator.trans('card.info.damage')+': '+format.fancy_int(card.enemy_damage)+'. '+Translator.trans('card.info.horror')+': '+format.fancy_int(card.enemy_horror)+'.</div>';
			break;
		case 'investigator':
			text += '<div>'+Translator.trans('card.info.willpower')+': '+card.skill_willpower+'. '+Translator.trans('card.info.intellect')+': '+card.skill_intellect+'. '+Translator.trans('card.info.combat')+': '+card.skill_combat+'. '+Translator.trans('card.info.agility')+': '+card.skill_agility+'.</div>';
			text += '<div>'+Translator.trans('card.info.health')+': '+card.health+'. '+Translator.trans('card.info.sanity')+': '+card.sanity+'.</div>'
			break;	
		case 'asset':
		case 'event':
			text += '<div>'+Translator.trans('card.info.cost')+': '+format.fancy_int(card.cost)+'. '+(card.xp ? Translator.trans('card.info.xp')+': '+card.xp+"." : "")+'</div>';

			if (card.skill_willpower || card.skill_intellect || card.skill_combat || card.skill_agility || card.skill_wild){
				text += '<div>'+Translator.trans('card.info.icons')+': ';
				if (card.skill_willpower){
					text += Array(card.skill_willpower+1).join('<span class="icon icon-willpower color-willpower"></span>');
				}
				if (card.skill_intellect){
					text += Array(card.skill_intellect+1).join('<span class="icon icon-intellect color-intellect"></span>');
				}
				if (card.skill_combat){
					text += Array(card.skill_combat+1).join('<span class="icon icon-combat color-combat"></span>');
				}
				if (card.skill_agility){
					text += Array(card.skill_agility+1).join('<span class="icon icon-agility color-agility"></span>');
				}
				if (card.skill_wild){
					text += Array(card.skill_wild+1).join('<span class="icon icon-wild color-wild"></span>');
				}
				text += '</div>';
			}
			if (card.health || card.sanity){
				text += '<div>'+Translator.trans('card.info.health')+': '+format.fancy_int(card.health)+'. '+Translator.trans('card.info.sanity')+': '+format.fancy_int(card.sanity)+'.</div>';
			}
			break;
		case 'skill':
			if (card.xp){
				text += '<div>'+(card.xp ? Translator.trans('card.info.xp')+': '+card.xp+"." : "")+'</div>';
			}
			if (card.skill_willpower || card.skill_intellect || card.skill_combat || card.skill_agility || card.skill_wild){
				text += '<div>'+Translator.trans('card.info.icons')+': ';
				if (card.skill_willpower){
					text += Array(card.skill_willpower+1).join('<span class="icon icon-willpower color-willpower"></span>');
				}
				if (card.skill_intellect){
					text += Array(card.skill_intellect+1).join('<span class="icon icon-intellect color-intellect"></span>');
				}
				if (card.skill_combat){
					text += Array(card.skill_combat+1).join('<span class="icon icon-combat color-combat"></span>');
				}
				if (card.skill_agility){
					text += Array(card.skill_agility+1).join('<span class="icon icon-agility color-agility"></span>');
				}
				if (card.skill_wild){
					text += Array(card.skill_wild+1).join('<span class="icon icon-wild color-wild"></span>');
				}
				text += '</div>';
			}
			break;
	}
	return text;
};

/**
 * @memberOf format
 */
format.text = function text(card) {
	var text = card.text || '';
	text = text.replace(/\[(\w+)\]/g, '<span title="$1" class="icon-$1"></span>')
	text = text.split("\n").join('</p><p>');
	return '<p>'+text+'</p>';
};

/**
 * @memberOf format
 */
format.back_text = function back_text(card) {
	var text = card.back_text || '';
	text = text.replace(/\[(\w+)\]/g, '<span title="$1" class="icon-$1"></span>')
	text = text.split("\n").join('</p><p>');
	return '<p>'+text+'</p>';
};

/**
 * @memberOf format
 */
format.html_page = function back_text(element) {
	var curInnerHTML = element.innerHTML;
	curInnerHTML = curInnerHTML.replace(/\[(\w+)\]/g, '<span title="$1" class="icon-$1"></span>')
	element.innerHTML = curInnerHTML;
};


})(app.format = {}, jQuery);
