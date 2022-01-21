array_1 = ['pen','paper','book','bottle'];

random_number = Math.floor((Math.random()*array_1.length)+1);

quick_draw_data_set_array = array_1[random_number];

console.log(quick_draw_data_set_array);

time_counter = 0;

timer_check = '';

drawn_sketch = '';

answer_holder = '';

score = '';

document.getElementById("sketch_required").innerHTML = 'Sketch to be drawn : ' + quick_draw_data_set_array;

function update_Canvas()
{
    background("white");
    random_number = Math.floor((Math.random()*quick_draw_data_set_array.length)+1);
    console.log(quick_draw_data_set_array[random_number]);
    sketch = quick_draw_data_set_array[random_number];
    document.getElementById("sketch_required").innerHTML = 'Sketch to be drawn : ' + quick_draw_data_set_array;
}

function setup()
{
    canvas = createCanvas(280,280);
    canvas.center();
    background("white");
}

sketch = quick_draw_data_set_array[random_number];

function draw()
{
    check_sketch()
    if(drawn_sketch == sketch)
    {
        answer_holder = "set";
        score = score+1;
        document.getElementById("score").innerHTML = "Score = " + score;
    }
}

function check_sketch()
{
    time_counter++;
    document.getElementById("timer").innerHTML = "timer = " + time_counter;
    console.log(time_counter);
        if(time_counter > 500)
        {
            time_counter = 0;
            timer_check = "completed";
        }
        if(time_counter == "completed" / answer_holder == "set")
        {
            timer_check = "";
            answer_holder = "";
            update_Canvas();
        }
}