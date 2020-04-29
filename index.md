<!DOCTYPE html>
<html>
    <head><meta charset="utf-8">
        <script src="js/jquery-3.5.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>

        <!-- Bootstrap -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
<!-- End of Bootstrap -->
<script src="js/pageLoadSpeed.js"></script>
    </head>
    
    <body>
        <div class="center-container">
            <div id="scene">
        <h4 data-depth="0.10">CB - Color tags Library</h4>
        </div>
        <script>
                var scene = document.getElementById('scene');
                var parallaxInstance = new Parallax(scene);
            </script>
        <small>The color tags for HTML</small>
        <br><br>
        <pre class="html5" style="font-family:monospace;"><b><span style="color: #009900;">&lt;cb-gold&gt;</span>Gold Color<span style="color: #009900;">&lt;<span style="color: #66cc66;">/</span>cb-gold&gt;</span></b></pre>
        <cb-gold>Gold Color</cb-gold>
        <br><br>
        <h4>Colors:</h4>
        <br>
        <code>&lt;cb-gold&gt;</code>
        <br>
        <cb-gold>Example of color</cb-gold>
        <br><br>
        <code>&lt;cb-cyan&gt;</code>
        <br>
        <cb-cyan>Example of color</cb-cyan>
        <br><br>
        <code>&lt;cb-amethyst&gt;</code>
        <br>
        <cb-amethyst>Example of color</cb-amethyst>
        <br><br><br>
        <div class="container" id="container">
  <a href="js/library.js" id="a" download="cb-color_tags.js">Download</a>
</div>
<br>
<button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#myModal">
  Есть ошибки?
</button>
<br>
<h5>Примечание: </h5><small>Вы можете использовать только 2 тега <code>&lt;cb-gold&gt;</code>, и 1 раз теги <code>&lt;cb-cyan&gt;</code> и <code>&lt;cb-amethyst&gt;</code>. <br>Именно в таком порядке! <br>Нажмите <a href="pick-library.html">сюда</a>, чтобы исправить это</small>
<br>
<h6>Также вы можете скачать дополнение к скрипту. <a href="dopolnenie.html" target="_blank">Нажмите, чтоб узнать, зачем оно</a>.</h6>
<style>
.center-container {
    text-align: center;
}
#container {
      height: 100%;
  display: flex;
  align-items: center;
}

#a {
  display: block;
  margin: auto;
  padding: 1rem 1.25rem;
  font-family: sans-serif;
  font-size: 1.5rem;
  text-decoration: none;
  text-shadow:
    -2px 4px 4px #091243, 
    0 0 10px #00D0FF,
    inset 1px 1px 1px white;
  color: #1FFFFF;
  border: 2px solid;
  border-radius: 4px;
  background-color: transparent;
  box-shadow: 
    0 1px 2px rgba(0,0,0, 0.6), 
    2px 1px 4px rgba(0,0,0, 0.3), 
    2px 4px 3px rgba(3,0,128, 0.3), 
    0 0 7px 2px rgba(0,208,255, 0.6), 
    inset 0 1px 2px rgba(0,0,0, 0.6), 
    inset 2px 1px 4px rgba(0,0,0, 0.3), 
    inset 2px 4px 3px rgba(3,0,128, 0.3), 
    inset 0 0 7px 2px rgba(0,208,255, 0.6);
  animation: flickering 5s infinite;
}
#footer {
    background: lightgray;
	position: absolute;
	width: 100%;
	height: 40px;
}
.modal-title {
    margin-right: 100px;
}

body {
    animation: background 5s infinite alternate;
}

@keyframes background {
  50% {
    background: skyblue;
    box-shadow: 0 -200px 100px -100px #0eb0cc inset;
  }
}

@keyframes flickering {
  0% {
    border-color: transparent;
    opacity: 0.2;
  }
  
  2% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  4% {
    border-color: transparent;
    opacity: 0.2;
  }
  
  8% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  28% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  30% {
    border-color: transparent;
    opacity: 0.2;
  }
  
  36% {
    border-color: #1FFFFF;
    opacity: 1;
  }
  
  100% {
    border-color: #1FFFFF;
    opacity: 1;
  }
}
</style>
        </div>
        <style>
            cb-gold[data-hover]:hover {
                text-decoration: underline;
            }
            cb-gold[data-center] {
                text-align: center;
            }
        </style>
        <div id="footer">
            <small>WebPage created with <a href="http://matthew.wagerfield.com/parallax/" target="_blank">parallax.js</a></small>
        </div>
        <!-- Modal Okno -->
        <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true" style="margin-right: -440px">&times;</span>
        </button>
        <h4 class="modal-title" id="myModalLabel">Проблемы?</h4>
      </div>
      <div class="modal-body">
        <h5>Если у вас появились ошибки, зайдите в js файл скрипта, и удалите там ненужное:
        <br><br>
        gold, gold_2 и т.д - <code>&lt;cb-gold&gt;</code>
        <br><br>
        cyan, cyan_2 и т.д - <code>&lt;cb-cyan&gt;</code>
        <br><br>
        amethyst, amethyst_2 и т.д - <code>&lt;cb-amethyst&gt;</code>
        </h5>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
        <!-- End of modal okno -->
        <script src="js/library.js"></script>
    </body>
</html>
