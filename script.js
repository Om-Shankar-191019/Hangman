
        var movies = ["DANGAL","SULTAN","RUSTOM","AEDILHAIMUSHKIL","DISHOOM","MOHENJODARO","HAPPYBHAGJAYEGI","TIGERZINDAHAI","HINDIMEDIUM","RANGOON","MERIPYAARIBINDU","PADMAAVAT","SANJU","SIMMBA","KABIRSINGH","BHARAT","MISSIONMANGAL","TANHAJI","MALANG","CHHAPAAK","LOVEAAJKAL","THAPPAD","PANGA","DILBECHARA","SHAKUNTALADEVI","RADHE","DARBAAN","SURAJPEMANGALBHARI","GULABOSITABO","ANGREZIMEDIUM","CHHALAANG","LUDO","AIRLIFT"];
        var fruits = ["MANGO","APPLE","BANANA","ORANGE","STRAWBERRY","GRAPE","WATERMELON","APRICOT","POMEGRANATE","PEAR","BLUEBERRY","PINEAPPLE","CHERRY","KIWIFRUIT","PAPAYA","GUAVA","RASPBERRY","BLACKBERRY","CUSTARDAPPLE"];
        var months = ["JANUARY","FEBRUARY","MARCH","APRIL","MAY","JUNE","JULY","AUGUST","SEPTEMBER","OCTOBER","NOVEMBER","DECEMBER"];
        var web_series = ["PAATALLOK","MADEINHEAVEN","PANCHAYAT","KOTAFACTORY","GULLAK","MIRZAPUR","INSIDEEDGE","SACREDGAMES","THEFAMILYMAN","DELHICRIME","CODEM","CRIMINALJUSTICE","RANGBAAZ","APHARAN","HOSTAGES","KAAFIR","GHOUL","MAHARANI","MASABAMASABA","BANDISHBANDITS","TVFTRIPLING","BHAUKAAL","SPECIALOPS","HOSTELDAZE"];
        var eatables = ["TEA","COFFEE","BISCUIT","BREAD","BUTTER","PULSES","OIL","MILK","SALT","RICE","POTATO","PASTA","FRENCHFRIES","ICECREAM","FRIEDRICE","PANCAKES","BURGER","PIZZA","CAKE","CHHOLEBHATURE","SAMOSA","JALEBI","DHOKLA","BIRYANI","LADOO","MASALADOSA","PULAO","MALPUA","UPMA","SHAHIPANEER","BUTTERNAAN","ROTI","DAL","POHA","SALAD"];
        var animals = ["COW","HORSE","LION","TIGER","DOG","CAT","BEAR","DEER","RABBIT","TURTLE","FISH","MOUSE","HAMSTER","SNAKE","BUFFALO","OX","FOX","DONKEY","ZEBRA","GIRAFFE","DINOSAUR","RHINOCEROS","CROCODILE"];
        var category = [movies,web_series,months,fruits,animals,eatables];
        var default_category_list = ["Hindi movies","Web series","Months","Fruits","Animals","Eatables"];
        var current_category = movies;
        var Q_sequence_bag = [];
        var Q_sequence_bag_capacity = current_category.length;
        var current_Q = "";
        var user_input = "";
        var current_Q_index;
        var Q_status = [];
        var Q_status_display = "";
        var initial_chance = 8;
        var chances_left = initial_chance;
        var answer_list = [];
        //element selector 
        const chance = document.querySelector(".chance");
        const abcd_buttons = document.querySelectorAll(".abcd-btn");
        const next_btn = document.querySelector(".next");
        const answer_btn = document.querySelector(".answer");
        const answer_box = document.querySelector(".answer-box");
        const answer_box_h3 = document.querySelector(".answer-box-h3");
        const question = document.querySelector(".question");
        const how_to_box = document.querySelector(".how-to-box");
        const how_to_play_btn = document.querySelector(".how-to-play-btn");
        const category_box = document.querySelector(".category-box");
        const select_category_btn = document.querySelector(".select-category-btn");
        const category_items = document.querySelectorAll(".item");
        const default_category = document.querySelector(".default-category");
        const correct_box = document.querySelector(".correct-box");

        question.textContent = "Welcome"
        select_category_btn.addEventListener("click",() => {
            category_box.classList.toggle("pop-up-category-box");
        });
        how_to_play_btn.addEventListener("click",() => {
            how_to_box.classList.toggle("pop-up-how-to-box");
        });
        
        category_items.forEach(function(ele,index){
            ele.addEventListener("click",function(){
                current_category = category[index];
                Q_sequence_bag_capacity = current_category.length; 
                Q_sequence_bag.splice(0);
                category_box.classList.remove("pop-up-category-box");
                default_category.textContent="Category selected : "+default_category_list[index];
            });
        });

        abcd_buttons.forEach(function(element){
            element.addEventListener("click",function (e){
                const ele_specific = e.currentTarget.classList;
                if(ele_specific.contains("A"))
                    user_input = "A";
                else if(ele_specific.contains("B"))
                    user_input = "B";
                else if(ele_specific.contains("C"))
                    user_input = "C";
                else if(ele_specific.contains("D"))
                    user_input = "D";
                else if(ele_specific.contains("E"))
                    user_input = "E";
                else if(ele_specific.contains("F"))
                    user_input = "F";
                else if(ele_specific.contains("G"))
                    user_input = "G";
                else if(ele_specific.contains("H"))
                    user_input = "H";
                else if(ele_specific.contains("I"))
                    user_input = "I";
                else if(ele_specific.contains("J"))
                    user_input = "J";
                else if(ele_specific.contains("K"))
                    user_input = "K";
                else if(ele_specific.contains("L"))
                    user_input = "L";
                else if(ele_specific.contains("M"))
                    user_input = "M";
                else if(ele_specific.contains("N"))
                    user_input = "N";
                else if(ele_specific.contains("O"))
                    user_input = "O";
                else if(ele_specific.contains("P"))
                    user_input = "P";
                else if(ele_specific.contains("Q"))
                    user_input = "Q";
                else if(ele_specific.contains("R"))
                    user_input = "R";
                else if(ele_specific.contains("S"))
                    user_input = "S";
                else if(ele_specific.contains("T"))
                    user_input = "T";
                else if(ele_specific.contains("U"))
                    user_input = "U";
                else if(ele_specific.contains("V"))
                    user_input = "V";
                else if(ele_specific.contains("W"))
                    user_input = "W";
                else if(ele_specific.contains("X"))
                    user_input = "X";
                else if(ele_specific.contains("Y"))
                    user_input = "Y";
                else 
                    user_input = "Z";
                
                check_input_validity(user_input);
            // update_all
            question.textContent = Q_status_display;
            chance.textContent = "Chances left : " + chances_left;
            });
        });
        
        next_btn.addEventListener("click",() =>{
            let index;
            if(Q_sequence_bag.length == Q_sequence_bag_capacity)
            {
                Q_sequence_bag.splice(0);
                index = getRandomNumber(0,current_category.length-1);
                Q_sequence_bag.push(index);
            }
            else
            {
                while(true)
                {
                    index = getRandomNumber(0,current_category.length-1);
                    if(Q_sequence_bag.indexOf(index)==-1)
                        {
                            Q_sequence_bag.push(index);
                            break;
                        }
                }  
            }
            current_Q = generateQuestion(current_category[index]);
            current_Q_index = index;
            answer_list = string_to_list_convertor(current_category[index]);
            Q_status = string_to_list_convertor(current_Q);
            Q_status_display = current_Q;
            chances_left = initial_chance;
            answer_btn.removeEventListener("click",show_answer);
            if(answer_box.classList.contains("pop-up-answer"))
                answer_box.classList.remove("pop-up-answer");
            if(how_to_box.classList.contains("pop-up-how-to-box"))
                how_to_box.classList.remove("pop-up-how-to-box");
            if(category_box.classList.contains("pop-up-category-box"))
                category_box.classList.remove("pop-up-category-box");
            if(correct_box.classList.contains("pop-up-correct-box"))
                correct_box.classList.remove("pop-up-correct-box");
            answer_btn.style.opacity=0.5;
            // update_all
            question.textContent = current_Q;
            chance.textContent = "Total chances : " + chances_left;
        });

        //getrandomNumber -- gives random number between two number both inclusive.
        function getRandomNumber(min,max){
            return (Math.floor((Math.random()*(max-min+1))+min));
        }

        // randommList -- giver list of n random number between zero to given range.
        function randomList(how_many,between_zero_and){
            if(how_many > between_zero_and)
            {
                how_many = between_zero_and+1 ;
            }
            let l = [];
            while(l.length!=how_many)
            {
                let rn = getRandomNumber(0,between_zero_and);
                while(l.indexOf(rn)==-1)
                    l.push(rn);
            }
            return l;
        }
        // generateQuestion convert any string passed to fill in the blanks type. eg...mohan = m_h_an
        function generateQuestion(str){
            let len = str.length;
            let total_space = getRandomNumber(Math.floor(len/2),Math.floor(len/2-1));
            let space_list = randomList(total_space,len-1);
            let question_array = [];
            for(let i=0;i<len;i++)  //convert str to list
            {
                question_array.push(str[i]);
            }
            for(let i=0;i<question_array.length;i++)  // making fill in the blanks
            {
                question_array[space_list[i]] = "-";
            }
            let question_str = "";
            for(let i=0;i<question_array.length;i++) // convert list to str question
            {
                question_str += question_array[i];
            }
            
            return question_str;
        }

        function string_to_list_convertor(str){
            let list = [];
            for(let i=0;i<str.length;i++)
            {
                list.push(str[i]);
            }
            return list;
        }
        function list_to_string_convertor(list){
            let str = "";
            for(let i=0;i<list.length;i++)
            {
                str += list[i];
            }
            return str;
        }

        function check_input_validity(user_input){
            let flag = 0;
            let i;
            for(i=0;i<answer_list.length;i++)
            {
                if(Q_status[i]=="-")
                {
                    if(answer_list[i] == user_input)
                    {
                        Q_status[i] = user_input;
                        flag = 1;
                    }
                }
            }
            if(flag==0)
            {
                if(chances_left>1)
                {
                    chances_left--;
                }
                else{
                    chances_left = "Answer button enabled";
                    answer_btn.addEventListener("click",show_answer);
                    answer_btn.style.opacity=1;
                }
            }

            Q_status_display = list_to_string_convertor(Q_status);
            
            if(list_to_string_convertor(answer_list)==Q_status_display)
            {
                answer_btn.addEventListener("click",show_answer);
                answer_btn.style.opacity=1;
                correct_box.classList.add("pop-up-correct-box");  
            }
        }

        function show_answer(){
            answer_box.classList.toggle("pop-up-answer");
            answer_box_h3.textContent=list_to_string_convertor(answer_list);
        }
        