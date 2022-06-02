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
    function add_money(count, block, delay, delay_off) {
        let money = +sessionStorage.getItem("money") + count;
        setTimeout((() => {
            sessionStorage.setItem("money", money);
            document.querySelectorAll(block).forEach((el => el.textContent = sessionStorage.getItem("money")));
            document.querySelectorAll(block).forEach((el => el.classList.add("_anim-add-money")));
        }), delay);
        setTimeout((() => {
            document.querySelectorAll(block).forEach((el => el.classList.remove("_anim-add-money")));
        }), delay_off);
    }
    function clearAll(windowObject) {
        var id = Math.max(windowObject.setInterval(noop, 1e3));
        while (id--) windowObject.clearInterval(id);
        function noop() {}
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
        pets_text_2.textContent = "Collect 80 stars\tin one game";
        pets_text_3.textContent = "Collect 120 stars\tin one game";
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
    function write_active_pet_header_game() {
        let active_pet = +sessionStorage.getItem("current-pet");
        if (1 == active_pet) {
            document.querySelector(".pet-header__icon img").setAttribute("src", "img/other/chick.png");
            document.querySelector(".pet-header__icon img").style.transform = "rotateY(-180deg)";
            sessionStorage.setItem("coeff", 1.5);
        } else if (2 == active_pet) {
            document.querySelector(".pet-header__icon img").setAttribute("src", "img/other/wolf.png");
            document.querySelector(".pet-header__icon img").style.transform = "rotateY(0deg)";
            document.querySelector(".pet-header__coeff").textContent = "1.8";
            document.querySelector(".game__icon img").setAttribute("src", "img/other/wolf.png");
            document.querySelector(".game__icon img").style.transform = "rotateY(0deg)";
            sessionStorage.setItem("coeff", 1.8);
        } else if (3 == active_pet) {
            document.querySelector(".pet-header__icon img").setAttribute("src", "img/other/fairy.png");
            document.querySelector(".pet-header__icon img").style.transform = "rotateY(0deg)";
            document.querySelector(".pet-header__coeff").textContent = "2.0";
            document.querySelector(".game__icon img").setAttribute("src", "img/other/fairy.png");
            document.querySelector(".game__icon img").style.transform = "rotateY(0deg)";
            sessionStorage.setItem("coeff", 2);
        }
    }
    const config_game = {
        hero: document.querySelector(".game__hero"),
        ground_bottom: -100,
        window_width: document.documentElement.clientWidth,
        stars: 0,
        count_win: 0,
        timerGround: false,
        timerCheckGameOver: false,
        timerCheckStars: false,
        loose: false,
        timerGroundCreate: false
    };
    function jump_hero() {
        document.querySelector(".game__hero").classList.add("_jump");
        setTimeout((() => {
            document.querySelector(".game__hero").classList.remove("_jump");
        }), 600);
        document.querySelector(".game__button-jump").classList.add("_hold");
        setTimeout((() => {
            document.querySelector(".game__button-jump").classList.remove("_hold");
        }), 550);
    }
    function get_coord_ground(item, num) {
        let pin = document.querySelector(item);
        let left = pin.getBoundingClientRect().left + num;
        let top = pin.getBoundingClientRect().top - 3;
        let block = document.elementFromPoint(left, top);
        return block;
    }
    function create_start_ground(num, left, prog) {
        let count = left;
        let ground = document.createElement("div");
        ground.classList.add("game__ground");
        ground.style.left = `${left}%`;
        ground.style.bottom = `${config_game.ground_bottom}px`;
        ground.style.zIndex = `2`;
        let image = document.createElement("img");
        image.setAttribute("src", `img/other/ground-${num}.png`);
        ground.append(image);
        document.querySelector(".game__grounds").append(ground);
        if (1 == prog) {
            setTimeout((() => {
                setInterval((() => {
                    count--;
                    ground.style.left = `${count}%`;
                }), 50);
            }), 3500);
            setTimeout((() => {
                ground.remove();
            }), 1e4);
        }
    }
    function create_start_grounds_width(program) {
        if (config_game.window_width <= 600) create_start_ground(1, 3, program); else if (config_game.window_width > 600 && config_game.window_width <= 700) {
            create_start_ground(1, 3, program);
            create_start_ground(2, 90, program);
        } else if (config_game.window_width > 700 && config_game.window_width <= 900) {
            create_start_ground(1, 3, program);
            create_start_ground(2, 80, program);
        } else if (config_game.window_width > 900 && config_game.window_width <= 1100) {
            create_start_ground(1, 3, program);
            create_start_ground(1, 70, program);
        } else if (config_game.window_width > 1100) {
            create_start_ground(1, 3, program);
            create_start_ground(1, 60, program);
        }
    }
    function create_ground() {
        let array_gorunds = [];
        let count_stars = config_game.stars;
        let rand_num = 0;
        let star_chance_array = [];
        let star_program = 0;
        if (count_stars < 10) {
            array_gorunds = [ 1, 1, 1, 1, 1, 2, 3, 4 ];
            rand_num = get_random(0, 8);
            star_chance_array = [ 1, 2, 3 ];
            star_program = get_random(0, 3);
        } else if (count_stars >= 10 && count_stars < 20) {
            array_gorunds = [ 1, 1, 2, 3, 4 ];
            rand_num = get_random(0, 5);
            star_chance_array = [ 0, 1, 2, 3 ];
            star_program = get_random(0, 4);
        } else if (count_stars >= 20) {
            array_gorunds = [ 1, 2, 2, 3, 3, 4, 4 ];
            rand_num = get_random(0, 7);
            star_chance_array = [ 0, 0, 1, 1, 2, 3 ];
            star_program = get_random(0, 6);
        }
        let count = 100;
        let ground = document.createElement("div");
        ground.classList.add("game__ground");
        ground.style.left = `${count}%`;
        ground.style.bottom = `${config_game.ground_bottom}px`;
        let image = document.createElement("img");
        image.setAttribute("src", `img/other/ground-${array_gorunds[rand_num]}.png`);
        ground.append(image);
        let stars = [ create_star(), create_star(), create_star() ];
        let rand = [ get_random(30, 70), get_random(0, 25), get_random(30, 55), get_random(60, 90) ];
        if (0 == star_chance_array[star_program]) {
            config_game.timerGround = setInterval((() => {
                count--;
                ground.style.left = `${count}%`;
            }), 50);
            document.querySelector(".game__grounds").append(ground);
            setTimeout((() => {
                ground.remove();
            }), 1e4);
        } else if (1 == star_chance_array[star_program]) {
            if (1 == array_gorunds[rand_num]) {
                stars[0].style.left = `${rand[0]}%`;
                stars[0].style.top = `0px`;
                ground.append(stars[0]);
                config_game.timerGround = setInterval((() => {
                    count--;
                    ground.style.left = `${count}%`;
                }), 50);
            } else if (2 == array_gorunds[rand_num] || 3 == array_gorunds[rand_num] || 4 == array_gorunds[rand_num]) {
                stars[0].style.left = `${rand[0]}%`;
                stars[0].style.top = `0px`;
                ground.append(stars[0]);
                config_game.timerGround = setInterval((() => {
                    count--;
                    ground.style.left = `${count}%`;
                }), 50);
            }
            document.querySelector(".game__grounds").append(ground);
            setTimeout((() => {
                ground.remove();
            }), 1e4);
        } else if (2 == star_chance_array[star_program]) {
            if (1 == array_gorunds[rand_num]) {
                stars[0].style.left = `${rand[1]}%`;
                stars[0].style.top = `0px`;
                stars[1].style.left = `${rand[3]}%`;
                stars[1].style.top = `$0px`;
                ground.append(stars[0], stars[1]);
                document.querySelector(".game__grounds").append(ground);
                config_game.timerGround = setInterval((() => {
                    count--;
                    ground.style.left = `${count}%`;
                }), 50);
                setTimeout((() => {
                    ground.remove();
                }), 1e4);
            } else if (2 == array_gorunds[rand_num] || 3 == array_gorunds[rand_num] || 4 == array_gorunds[rand_num]) {
                stars[0].style.left = `${rand[0]}%`;
                stars[0].style.top = `0px`;
                ground.append(stars[0]);
                document.querySelector(".game__grounds").append(ground);
                config_game.timerGround = setInterval((() => {
                    count--;
                    ground.style.left = `${count}%`;
                }), 50);
                setTimeout((() => {
                    ground.remove();
                }), 1e4);
            }
        } else if (3 == star_chance_array[star_program]) if (1 == array_gorunds[rand_num]) {
            stars[0].style.left = `${rand[1]}%`;
            stars[0].style.top = `0px`;
            stars[1].style.left = `${rand[2]}%`;
            stars[1].style.top = `0px`;
            stars[2].style.left = `${rand[3]}%`;
            stars[2].style.top = `0px`;
            ground.append(stars[0], stars[1], stars[2]);
            document.querySelector(".game__grounds").append(ground);
            config_game.timerGround = setInterval((() => {
                count--;
                ground.style.left = `${count}%`;
            }), 50);
            setTimeout((() => {
                ground.remove();
            }), 1e4);
        } else if (2 == array_gorunds[rand_num] || 3 == array_gorunds[rand_num] || 4 == array_gorunds[rand_num]) {
            stars[0].style.left = `${rand[0]}%`;
            stars[0].style.top = `0px`;
            ground.append(stars[0]);
            document.querySelector(".game__grounds").append(ground);
            config_game.timerGround = setInterval((() => {
                count--;
                ground.style.left = `${count}%`;
            }), 50);
            setTimeout((() => {
                ground.remove();
            }), 1e4);
        }
    }
    function check_coins() {
        let dot = document.createElement("div");
        dot.style.position = "absolute";
        dot.style.bottom = `40px`;
        dot.style.right = `50px`;
        dot.style.width = "5px";
        dot.style.height = "5px";
        dot.style.zIndex = "5";
        document.querySelector(".game__hero").append(dot);
        setTimeout((() => {
            dot.remove();
        }), 50);
        let left_1 = dot.getBoundingClientRect().left + 6;
        let top_1 = dot.getBoundingClientRect().top;
        let star = document.elementFromPoint(left_1, top_1);
        if (star.closest(".game__star")) give_stars(star.closest(".game__star"));
    }
    function give_stars(block) {
        block.classList.add("_hide");
        config_game.stars = config_game.stars + 1;
        setTimeout((() => {
            document.querySelector(".stars-header__value").textContent = config_game.stars;
            block.remove();
        }), 1e3);
    }
    function check_game_over() {
        let dot = document.createElement("div");
        dot.classList.add("_chek_over");
        document.querySelector(".wrapper").append(dot);
        setTimeout((() => {
            dot.remove();
        }), 50);
        let left_1 = dot.getBoundingClientRect().left + 6;
        let top_1 = dot.getBoundingClientRect().top;
        let ground = document.elementFromPoint(left_1, top_1);
        if (!ground.closest(".game__ground")) {
            if (config_game.loose) return;
            config_game.loose = true;
            fox_down();
            stop_intervals();
            check_win_count();
            check_win_character();
            console.log(`config_game.count_win - ${config_game.count_win}`);
            if (config_game.count_win > 0) {
                document.querySelector(".box-training__count-coins").textContent = `+${config_game.count_win}`;
                setTimeout((() => {
                    add_money(+config_game.count_win, ".check");
                }), 1e3);
            } else document.querySelector(".box-training__count-coins").textContent = 0;
            document.querySelectorAll(".box-training__count-stars").forEach((el => el.textContent = config_game.stars));
            setTimeout((() => {
                document.querySelector(".gameover").classList.add("_active");
                document.querySelector(".wrapper").classList.remove("_anim-bg");
            }), 1e3);
        }
    }
    function check_win_character() {
        if (config_game.stars >= 120 && !sessionStorage.getItem("character-3")) sessionStorage.setItem("character-3", true); else if (config_game.stars >= 80 && !sessionStorage.getItem("character-2")) sessionStorage.setItem("character-2", true);
    }
    function stop_intervals() {
        clearAll(window);
    }
    function pause_game() {
        document.querySelector(".timer").classList.remove("_active");
        document.querySelector(".wrapper").classList.remove("_anim-bg");
        document.querySelector(".game__hero").classList.remove("_active");
    }
    function play_after_pause() {
        if (document.querySelector(".game__ground")) document.querySelectorAll(".game__ground").forEach((el => el.remove()));
        create_start_grounds_width(1);
        start_timer();
        setTimeout((() => {
            start_check_new_ground();
            document.querySelector(".wrapper").classList.add("_anim-bg");
            document.querySelector(".game__hero").classList.add("_active");
            start_check();
            start_check_stars();
        }), 3500);
    }
    function start_game() {
        start_timer();
        create_start_grounds_width(1);
        delete_money(+sessionStorage.getItem("current-bet"), ".check");
        setTimeout((() => {
            start_check_new_ground();
            document.querySelector(".wrapper").classList.add("_anim-bg");
            document.querySelector(".game__icon").classList.add("_anim");
            document.querySelector(".game__hero").classList.add("_active");
            document.querySelector(".game__button-jump").classList.remove("_hold");
            start_check();
            start_check_stars();
        }), 3500);
    }
    function restart_game() {
        config_game.count_win = 0;
        config_game.loose = false;
        config_game.stars = 0;
        if (document.querySelector(".game__ground")) document.querySelectorAll(".game__ground").forEach((el => el.remove()));
        document.querySelector(".box-training__count-stars").textContent = config_game.stars;
        document.querySelector(".stars-header__value").textContent = config_game.stars;
        document.querySelector(".game__hero").classList.remove("_hide");
        document.querySelector(".game__hero").classList.remove("_active");
        document.querySelector(".game__hero").classList.remove("_jump-down");
        document.querySelector(".wrapper").classList.remove("_anim-bg");
        document.querySelector(".game__icon").classList.remove("_anim");
        document.querySelector(".game__button-jump").classList.add("_hold");
        document.querySelector(".timer").classList.remove("_active");
        document.querySelector(".pause").classList.remove("_active");
        document.querySelector(".gameover").classList.remove("_active");
        setTimeout((() => {
            start_game();
        }), 10);
    }
    function fox_down() {
        document.querySelector(".game__hero").classList.add("_jump-down");
        document.querySelector(".game__hero").classList.add("_hide");
    }
    function start_check() {
        config_game.timerCheckGameOver = setInterval((() => {
            if (!config_game.loose) check_game_over(); else clearInterval(config_game.timerCheckGameOver);
        }), 10);
    }
    function stop_check() {
        clearInterval(config_game.timerCheckGameOver);
    }
    function start_check_stars() {
        if (!config_game.loose) config_game.timerCheckStars = setInterval((() => {
            if (!config_game.loose) check_coins(); else clearInterval(config_game.timerCheckStars);
        }), 10);
    }
    function check_win_count() {
        let bet = +sessionStorage.getItem("current-bet");
        let coeff = +sessionStorage.getItem("coeff");
        if (config_game.stars >= 5 && config_game.stars < 10) config_game.count_win = bet * coeff; else if (config_game.stars >= 10 && config_game.stars < 15) config_game.count_win = 2 * bet * coeff; else if (config_game.stars >= 15 && config_game.stars < 20) config_game.count_win = 3 * bet * coeff; else if (config_game.stars >= 20 && config_game.stars < 25) config_game.count_win = 5 * bet * coeff; else if (config_game.stars >= 25 && config_game.stars < 35) config_game.count_win = 10 * bet * coeff; else if (config_game.stars >= 35 && config_game.stars < 50) config_game.count_win = 20 * bet * coeff; else if (config_game.stars >= 50) config_game.count_win = 50 * bet * coeff;
    }
    function start_check_new_ground() {
        config_game.timerGroundCreate = setInterval((() => {
            let ground = get_coord_ground(".pin_2", 5);
            if (!ground.closest(".game__ground")) create_ground();
        }), 600);
    }
    function start_timer() {
        setTimeout((() => {
            document.querySelector(".timer").classList.add("_active");
            write_timer_count();
        }), 500);
    }
    function write_timer_count() {
        let count = 3;
        document.querySelector(".timer__count").textContent = count;
        let timer = setInterval((() => {
            if (0 == count) clearInterval(timer);
            count--;
            document.querySelector(".timer__count").textContent = count;
        }), 1e3);
    }
    function create_star() {
        let item = document.createElement("div");
        item.classList.add("game__star");
        let image = document.createElement("img");
        image.setAttribute("src", "img/other/star.png");
        item.append(image);
        return item;
    }
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
            document.querySelector(".bet").textContent = sessionStorage.getItem("current-bet");
            write_active_pet_header_game();
            start_game();
        }
        if (targetElement.closest(".box-training__button-ok") && document.querySelector(".game__pause").classList.contains("_active")) {
            play_after_pause();
            document.querySelector(".game__pause").classList.remove("_active");
        }
        if (targetElement.closest(".game__button-jump")) {
            jump_hero();
            stop_check();
            setTimeout((() => {
                check_game_over();
            }), 700);
            setTimeout((() => {
                start_check();
            }), 750);
        }
        if (targetElement.closest(".header__button-pause")) {
            stop_intervals();
            console.log(`config_game.timerCheckGameOver - ${config_game.timerCheckGameOver}`);
            console.log(`config_game.timerCheckStars - ${config_game.timerCheckStars}`);
            console.log(`config_game.timerGround - ${config_game.timerGround}`);
            console.log(`config_game.timerGroundCreate - ${config_game.timerGroundCreate}`);
            setTimeout((() => {
                pause_game();
            }), 50);
            document.querySelector(".pause").classList.add("_active");
            document.querySelector(".box-training__count-stars").textContent = config_game.stars;
        }
        if (targetElement.closest(".button-restart")) restart_game();
    }));
    window["FLS"] = true;
    isWebp();
    addLoadedClass();
})();