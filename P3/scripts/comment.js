var heartSVG = `<svg class="heart" viewBox="0 0 32 29.6">
  <path id='realHeart' d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
	c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
</svg>`;

var blogRepliesButtons = document.querySelectorAll('.blog-post-comment-submit')
var commentCounters = document.querySelectorAll('.comment-counter');

for (let i = 0; i < blogRepliesButtons.length; i++) {
    blogRepliesButtons[i].addEventListener('click', postComment);
}

function updateCommentCount(counter){
    var postComment = counter.parentNode.nextElementSibling.firstElementChild;
    var realCount = postComment.childElementCount;
    counter.innerHTML = realCount;
}

function cannotClick(){
    alert("You cannot like your own comment!")
}

function postComment(e){
    let commentsContainer = this.parentNode.parentElement.previousElementSibling;
    let input = this.previousElementSibling.value;
    var div = document.createElement('div');
    div.className = 'blog-post-comment-single';
    div.innerHTML = `<h4 class="blog-post-comment-info">Guest</h4>
                    <p class="blog-post-comment-text">` + input + `</p>
                    <div class="blog-post-comment-properties">
                        <div class='comment-like-counter'>0</div>
                        <svg class="heart" viewBox="0 0 32 29.6">
                            <path class='heartShape clickable' onclick="cannotClick()" d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                        </svg>
                    </div>`;
    commentsContainer.appendChild(div);
    updateCommentCount(commentCounters[0]);
    updateCommentCount(commentCounters[1]);
    updateCommentCount(commentCounters[2]);
    updateCommentCount(commentCounters[3]);
    updateCommentCount(commentCounters[4]);
}

updateCommentCount(commentCounters[0]);
updateCommentCount(commentCounters[1]);
updateCommentCount(commentCounters[2]);
updateCommentCount(commentCounters[3]);
updateCommentCount(commentCounters[4]);

var clickableHearts = document.querySelectorAll('.heartShape.clickable');
for (let i = 0; i < clickableHearts.length; i++){
    clickableHearts[i].addEventListener('click', changeHeartToComment);
}

function changeHeartToComment(e){
    var counter = this.parentElement.previousElementSibling;
    var n = parseInt(counter.innerHTML);
    if (counter.hasAttribute('heartGiven')){
        counter.innerHTML = n-1;
        counter.removeAttribute('heartGiven')
        this.setAttribute('style','transition:0.4s ease;');
    } else {
        counter.innerHTML = n+1;
        counter.setAttribute('heartGiven','')
        this.setAttribute('style','fill:rgb(255,60,60);transition:0.4s ease;');
    }
}
