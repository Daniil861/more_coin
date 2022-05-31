(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    function addLoadedClass() {
        window.addEventListener("load", (function() {
            if (document.querySelector("body")) setTimeout((function() {
                document.querySelector("body").classList.add("_loaded");
            }), 200);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    if (sessionStorage.getItem("preloader")) {
        if (document.querySelector(".preloader")) document.querySelector(".preloader").classList.add("_hide");
        document.querySelector(".wrapper").classList.add("_visible");
    }
    if (sessionStorage.getItem("money")) {
        if (document.querySelector(".check")) document.querySelectorAll(".check").forEach((el => {
            el.textContent = sessionStorage.getItem("money");
        }));
    } else {
        sessionStorage.setItem("money", 1e3);
        if (document.querySelector(".check")) document.querySelectorAll(".check").forEach((el => {
            el.textContent = sessionStorage.getItem("money");
        }));
    }
    if (document.querySelector(".main")) if (+sessionStorage.getItem("money") >= 50) {
        document.querySelector(".block-bet__coins").textContent = 50;
        sessionStorage.setItem("current-bet", 50);
    } else {
        document.querySelector(".block-bet__coins").textContent = 0;
        sessionStorage.setItem("current-bet", 0);
    }
    const preloader = document.querySelector(".preloader");
    const wrapper = document.querySelector(".wrapper");
    function remove_class(block, className) {
        document.querySelectorAll(block).forEach((el => {
            if (el.classList.contains(className)) el.classList.remove(className);
        }));
    }
    function delete_money(count, block) {
        let money = +sessionStorage.getItem("money");
        sessionStorage.setItem("money", money - count);
        setTimeout((() => {
            document.querySelectorAll(block).forEach((el => el.classList.add("_delete-money")));
            document.querySelectorAll(block).forEach((el => el.textContent = sessionStorage.getItem("money")));
        }), 500);
        setTimeout((() => {
            document.querySelectorAll(block).forEach((el => el.classList.remove("_delete-money")));
        }), 1500);
    }
    function no_money(block) {
        document.querySelectorAll(block).forEach((el => el.classList.add("_no-money")));
        setTimeout((() => {
            document.querySelectorAll(block).forEach((el => el.classList.remove("_no-money")));
        }), 1e3);
    }
    function get_random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    let anim_items = document.querySelectorAll(".icon-anim img");
    function get_random_animate() {
        let number = get_random(0, 3);
        let arr = [ "jump", "scale", "rotate" ];
        let random_item = get_random(0, anim_items.length);
        anim_items.forEach((el => {
            if (el.classList.contains("_anim-icon-jump")) el.classList.remove("_anim-icon-jump"); else if (el.classList.contains("_anim-icon-scale")) el.classList.remove("_anim-icon-scale"); else if (el.classList.contains("_anim-icon-rotate")) el.classList.remove("_anim-icon-rotate");
        }));
        setTimeout((() => {
            anim_items[random_item].classList.add(`_anim-icon-${arr[number]}`);
        }), 100);
    }
    if (document.querySelector(".icon-anim img")) setInterval((() => {
        get_random_animate();
    }), 1e4);
    const config_training = {
        program: 1
    };
    const prices = {
        character_2: 1e5,
        character_3: 2e5
    };
    if (document.querySelector(".main") && document.querySelector(".preloader").classList.contains("_hide")) {
        document.querySelector(".main").classList.add("_active");
        if (sessionStorage.getItem("training-complete")) {
            document.querySelector(".training").remove();
            document.querySelector(".main").classList.remove("_hide");
        }
    }
    if (document.querySelector(".main")) {
        if (!sessionStorage.getItem("current-pet")) sessionStorage.setItem("current-pet", 1);
        if (!sessionStorage.getItem("pet")) sessionStorage.setItem("pet", 1);
        get_active_pet();
    }
    function create_pet_item() {
        let item = document.createElement("div");
        item.classList.add("box-training__pets");
        item.classList.add("pets");
        let item_body = document.createElement("div");
        item_body.classList.add("pets__body");
        let pets_item_1 = document.createElement("div");
        let pets_item_2 = document.createElement("div");
        let pets_item_3 = document.createElement("div");
        pets_item_1.classList.add("pets__item");
        pets_item_2.classList.add("pets__item");
        pets_item_3.classList.add("pets__item");
        pets_item_2.classList.add("_hide");
        pets_item_3.classList.add("_hide");
        let pets_item_body_1 = document.createElement("div");
        let pets_item_body_2 = document.createElement("div");
        let pets_item_body_3 = document.createElement("div");
        pets_item_body_1.classList.add("pets__item-body");
        pets_item_body_2.classList.add("pets__item-body");
        pets_item_body_3.classList.add("pets__item-body");
        let item_image_item_1 = document.createElement("div");
        let item_image_item_2 = document.createElement("div");
        let item_image_item_3 = document.createElement("div");
        item_image_item_1.classList.add("pets__image");
        item_image_item_2.classList.add("pets__image");
        item_image_item_3.classList.add("pets__image");
        let item_image_1 = document.createElement("img");
        let item_image_2 = document.createElement("img");
        let item_image_3 = document.createElement("img");
        item_image_1.setAttribute("src", "img/other/chick.png");
        item_image_2.setAttribute("src", "img/other/wolf.png");
        item_image_3.setAttribute("src", "img/other/fairy.png");
        item_image_item_1.append(item_image_1);
        item_image_item_2.append(item_image_2);
        item_image_item_3.append(item_image_3);
        let coeff_1 = document.createElement("div");
        let coeff_2 = document.createElement("div");
        let coeff_3 = document.createElement("div");
        coeff_1.classList.add("pets__coeff");
        coeff_2.classList.add("pets__coeff");
        coeff_3.classList.add("pets__coeff");
        coeff_1.textContent = "x1.5";
        coeff_2.textContent = "x1.8";
        coeff_3.textContent = "x2.0";
        let pets_icon_item_1 = document.createElement("div");
        let pets_icon_item_2 = document.createElement("div");
        let pets_icon_item_3 = document.createElement("div");
        pets_icon_item_1.classList.add("pets__icon");
        pets_icon_item_2.classList.add("pets__icon");
        pets_icon_item_3.classList.add("pets__icon");
        let pets_icon_1 = document.createElement("img");
        let pets_icon_2 = document.createElement("img");
        let pets_icon_3 = document.createElement("img");
        pets_icon_1.setAttribute("src", "img/icons/btn-ok.png");
        pets_icon_2.setAttribute("src", "img/icons/btn-ok.png");
        pets_icon_3.setAttribute("src", "img/icons/btn-ok.png");
        pets_icon_item_1.append(pets_icon_1);
        pets_icon_item_2.append(pets_icon_2);
        pets_icon_item_3.append(pets_icon_3);
        let pets_text_2 = document.createElement("div");
        let pets_text_3 = document.createElement("div");
        pets_text_2.classList.add("pets__text");
        pets_text_3.classList.add("pets__text");
        pets_text_2.classList.add("_hide");
        pets_text_3.classList.add("_hide");
        pets_text_2.textContent = "Collect 200 stars\tin one game";
        pets_text_3.textContent = "Collect 400 stars\tin one game";
        let pets_sub_text_2 = document.createElement("div");
        let pets_sub_text_3 = document.createElement("div");
        pets_sub_text_2.classList.add("pets__sub-text");
        pets_sub_text_2.classList.add("pets__sub-text_training");
        pets_sub_text_3.classList.add("pets__sub-text");
        pets_sub_text_3.classList.add("pets__sub-text_training");
        let icon_2 = document.createElement("img");
        let icon_3 = document.createElement("img");
        icon_2.setAttribute("src", "img/icons/coin.png");
        icon_3.setAttribute("src", "img/icons/coin.png");
        let sub_text_2 = document.createElement("div");
        let sub_text_3 = document.createElement("div");
        sub_text_2.classList.add("pets__price");
        sub_text_3.classList.add("pets__price");
        sub_text_2.textContent = "100k";
        sub_text_3.textContent = "200k";
        pets_sub_text_2.append(icon_2, sub_text_2);
        pets_sub_text_3.append(icon_3, sub_text_3);
        pets_item_body_1.append(item_image_item_1, coeff_1, pets_icon_item_1);
        pets_item_body_2.append(item_image_item_2, coeff_2, pets_icon_item_2, pets_sub_text_2, pets_text_2);
        pets_item_body_3.append(item_image_item_3, coeff_3, pets_icon_item_3, pets_sub_text_3, pets_text_3);
        pets_item_1.append(pets_item_body_1);
        pets_item_2.append(pets_item_body_2);
        pets_item_3.append(pets_item_body_3);
        item_body.append(pets_item_1, pets_item_2, pets_item_3);
        item.append(item_body);
        return item;
    }
    function get_active_pet() {
        document.querySelectorAll(".pets__item").forEach((el => {
            if (el.classList.contains("_selected")) el.classList.remove("_selected");
        }));
        let active_pet = +sessionStorage.getItem("current-pet") - 1;
        document.querySelectorAll(".pets__item")[active_pet].classList.add("_selected");
        if (0 == active_pet) {
            document.querySelector(".main__image-chick img").setAttribute("src", "img/other/chick.png");
            document.querySelector(".main__image-chick img").style.transform = "rotateY(-180deg)";
        } else if (1 == active_pet) {
            document.querySelector(".main__image-chick img").setAttribute("src", "img/other/wolf.png");
            document.querySelector(".main__image-chick img").style.transform = "rotateY(0deg)";
        } else if (2 == active_pet) {
            document.querySelector(".main__image-chick img").setAttribute("src", "img/other/fairy.png");
            document.querySelector(".main__image-chick img").style.transform = "rotateY(0deg)";
        }
    }
    function check_opened_pet() {
        if (sessionStorage.getItem("character-2")) document.querySelectorAll(".pets__item")[1].classList.remove("_hide");
        if (sessionStorage.getItem("character-3")) document.querySelectorAll(".pets__item")[2].classList.remove("_hide");
    }
    const config_game = {
        hero: document.querySelector(".game__hero"),
        pin_2: document.querySelector(".pins__pin_middle"),
        pin_3: document.querySelector(".pins__pin_end")
    };
    if (document.querySelector(".game")) ;
    function jump_hero() {
        let count = 0;
        const element = document.querySelector(".game__hero");
        const style = window.getComputedStyle(element);
        const coord_bottom = parseInt(style.bottom, 10);
        let timerId = setInterval((() => {
            count += 3;
            config_game.hero.style.bottom = `${coord_bottom + count}px`;
            if (count >= 51) clearInterval(timerId);
        }), 10);
        setTimeout((() => {
            count = 0;
            let timerId2 = setInterval((() => {
                count += 3;
                config_game.hero.style.bottom = `${coord_bottom + 50 - count}px`;
                if (count >= 51) {
                    config_game.hero.style.bottom = `${coord_bottom}px`;
                    clearInterval(timerId2);
                }
            }), 10);
        }), 250);
        document.querySelector(".game__button-jump").classList.add("_hold");
        setTimeout((() => {
            document.querySelector(".game__button-jump").classList.remove("_hold");
        }), 550);
    }
    function get_coord_next_ground() {
        let pin = document.querySelector(".pin_2");
        let left = pin.getBoundingClientRect().left - 3;
        let top = pin.getBoundingClientRect().top - 3;
        let block = document.elementFromPoint(left, top);
        return block;
    }
    setInterval((() => {
        let ground = get_coord_next_ground();
        console.log(`ground - ${ground}`);
        if (!ground.classList.contains(".game__ground")) ;
    }), 20);
    document.addEventListener("click", (e => {
        let targetElement = e.target;
        let current_bet = +sessionStorage.getItem("current-bet");
        let current_bank = +sessionStorage.getItem("money");
        if (targetElement.closest(".preloader__button")) {
            sessionStorage.setItem("preloader", true);
            preloader.classList.add("_hide");
            wrapper.classList.add("_visible");
            if (document.querySelector(".main") && document.querySelector(".preloader").classList.contains("_hide")) document.querySelector(".main").classList.add("_active");
        }
        if (targetElement.closest(".block-bet__minus")) if (current_bet > 50) {
            sessionStorage.setItem("current-bet", current_bet - 50);
            document.querySelector(".block-bet__coins").textContent = sessionStorage.getItem("current-bet");
        }
        if (targetElement.closest(".block-bet__plus")) if (current_bank - 49 > current_bet) {
            sessionStorage.setItem("current-bet", current_bet + 50);
            document.querySelector(".block-bet__coins").textContent = sessionStorage.getItem("current-bet");
        } else no_money(".check");
        if (targetElement.closest(".block-bet__min")) if (+sessionStorage.getItem("money") >= 50) {
            sessionStorage.setItem("current-bet", 50);
            document.querySelector(".block-bet__coins").textContent = sessionStorage.getItem("current-bet");
        } else no_money(".check");
        if (targetElement.closest(".block-bet__max")) if (+sessionStorage.getItem("money") >= 50) {
            sessionStorage.setItem("current-bet", +sessionStorage.getItem("money"));
            document.querySelector(".block-bet__coins").textContent = sessionStorage.getItem("current-bet");
        } else no_money(".check");
        if (targetElement.closest(".box-training__button") && 1 == config_training.program && document.querySelector(".training")) {
            setTimeout((() => {
                config_training.program = 2;
            }), 100);
            document.querySelector(".box-training__bg-text").textContent = "pet";
            document.querySelector(".item-training__text p").textContent = "Animals can be bought for coins";
            document.querySelector(".block-bet").remove();
            let pets_item = create_pet_item();
            document.querySelector(".box-training__image").append(pets_item);
        }
        if (targetElement.closest(".box-training__button") && 2 == config_training.program && document.querySelector(".training")) {
            setTimeout((() => {
                config_training.program = 3;
            }), 100);
            document.querySelector(".item-training__text p").textContent = "To get more pets - complete tasks";
            document.querySelectorAll(".pets__sub-text_training").forEach((el => el.remove()));
            document.querySelectorAll(".pets__text").forEach((el => {
                if (el.classList.contains("_hide")) el.classList.remove("_hide");
            }));
        }
        if (targetElement.closest(".box-training__button") && 3 == config_training.program && document.querySelector(".training")) {
            document.querySelector(".control-training__button-jump").classList.add("_active");
            document.querySelector(".character-training__body").classList.add("_active");
            document.querySelector(".item-training__body").remove();
        }
        if (targetElement.closest(".character-training__button")) {
            sessionStorage.setItem("training-complete", true);
            document.querySelector(".training").classList.add("_anim");
            document.querySelector(".main").classList.remove("_hide");
            config_training.program = 1;
            setTimeout((() => {
                document.querySelector(".training").remove();
            }), 2e3);
        }
        if (targetElement.closest(".control-training__button-jump")) if (document.querySelector(".control-training__button-jump").classList.contains("_active")) document.querySelector(".control-training__button-jump").classList.remove("_active");
        if (targetElement.closest(".button-pets")) {
            document.querySelector(".button-pets").classList.add("_hide");
            document.querySelector(".box-training__bg-text").textContent = "pet";
            document.querySelector(".block-bet").classList.add("_hide");
            document.querySelector(".pets").classList.remove("_hide");
            document.querySelector(".box-training__button-back").classList.remove("_hide");
            get_active_pet();
            check_opened_pet();
        }
        if (targetElement.closest(".box-training__button-back")) {
            document.querySelector(".box-training__button-back").classList.add("_hide");
            document.querySelector(".pets").classList.add("_hide");
            document.querySelector(".block-bet").classList.remove("_hide");
            document.querySelector(".box-training__bg-text").textContent = "bet";
            document.querySelector(".button-pets").classList.remove("_hide");
        }
        if (targetElement.closest(".pets__item") && 1 == targetElement.closest(".pets__item").dataset.character) {
            remove_class(".pets__item", "_active");
            targetElement.closest(".pets__item").classList.add("_active");
            sessionStorage.setItem("pet", 1);
        }
        if (targetElement.closest(".pets__item") && 2 == targetElement.closest(".pets__item").dataset.character) if (sessionStorage.getItem("character-2")) {
            remove_class(".pets__item", "_active");
            targetElement.closest(".pets__item").classList.add("_active");
            sessionStorage.setItem("pet", 2);
        } else if (+sessionStorage.getItem("money") >= prices.character_2) {
            delete_money(prices.character_2, ".check");
            sessionStorage.setItem("character-2", true);
            targetElement.closest(".pets__item").classList.remove("_hide");
        } else if (+sessionStorage.getItem("money") < prices.character_2) no_money(".check");
        if (targetElement.closest(".pets__item") && 3 == targetElement.closest(".pets__item").dataset.character) if (sessionStorage.getItem("character-3")) {
            remove_class(".pets__item", "_active");
            targetElement.closest(".pets__item").classList.add("_active");
            sessionStorage.setItem("pet", 3);
        } else if (+sessionStorage.getItem("money") >= prices.character_3) {
            delete_money(prices.character_3, ".check");
            sessionStorage.setItem("character-3", true);
            targetElement.closest(".pets__item").classList.remove("_hide");
        } else if (+sessionStorage.getItem("money") < prices.character_3) no_money(".check");
        if (targetElement.closest(".box-training__button-ok") && !document.querySelector(".training") && document.querySelector(".main__button-pets").classList.contains("_hide")) {
            sessionStorage.setItem("current-pet", sessionStorage.getItem("pet"));
            get_active_pet();
        }
        if (targetElement.closest(".box-training__button-ok") && !document.querySelector(".training") && !document.querySelector(".main__button-pets").classList.contains("_hide")) {
            document.querySelector(".main").classList.add("_hide");
            document.querySelector(".game").classList.remove("_hide");
        }
        if (targetElement.closest(".game__button-jump")) jump_hero();
    }));
    window["FLS"] = true;
    isWebp();
    addLoadedClass();
})();