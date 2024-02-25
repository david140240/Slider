<template>
  <input type="radio" name="slider" id="s1" class="d-none" checked>
  <input type="radio" name="slider" id="s2" class="d-none">
  <input type="radio" name="slider" id="s3" class="d-none">
  <input type="radio" name="slider" id="s4" class="d-none">
  <input type="radio" name="slider" id="s5" class="d-none">

  <div class="fon__content" id="fonapp">

    <div class="left_block">
      <div class="cards">
        <label for="s1" id="slide1" class="s1">
          <div class="image">
            <img src="../img/gven.png"/>
          </div>
        </label>

        <label for="s2" id="slide2" class="s2">
          <div class="image">
            <img src="../img//peter.png"/>
          </div>
        </label>

        <label for="s3" id="slide3">
          <div class="image">
            <img src="../img//miles.png"/>
          </div>
        </label>

        <label for="s4" id="slide4" class="s4">
          <div class="image">
            <img src="../img//migel.png"/>
          </div>
        </label>

        <label for="s5" id="slide5" class="s5">
          <div class="image">
            <img src="../img//afr-spider.png"/>
          </div>
        </label>
      </div>

    </div>

    <div class="actors_cards">

      <label for="s1" id="gven_slide">
        <div class="flex__item__gven">
          <img src="../img/gven_a.png"/>
        </div>
      </label>

      <label for="s3" id="miles_slide">
        <div class="flex__item_miles">
          <img src="../img/miles_a.png"/>
        </div>
      </label>

      <label for="s2" id="peter_slide">
        <div class="flex__item flex__item--right">
          <img src="../img/peter_a.png"/>
        </div>
      </label>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    data_card: {
      type: Object,
      default: () => {
      }
    }
  },
  name: 'card-item',
}
</script>


<style lang="scss">

.fon__content {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: absolute;
  display: flex;
  justify-content: space-between;


  .left_block {
    width: 50%;
    display: flex;
    align-items: center;

  }
}


.actors_cards {
  height: 100%;
  width: 50%;
  position: relative;
}

.cards {
  position: relative;
  width: 415px;
  height: 200px;
  perspective: 1300px;
  transform-style: preserve-3d;
  left: 270px;

}

.cards label {
  height: 329.31px;
  width: 199px;
  left: 0;
  right: 0;
  cursor: pointer;
  border-radius: 51px;
  transition: transform 0.55s ease;
  position: absolute;
}


.actors_cards label {
  left: 0;
  right: 0;
  transition: transform 0.55s ease;
  display: flex;
  justify-content: center;
  transform: translate3d(500px, 0, 0);
  display: none;
}

.cards .image {
  border-radius: 51px;
  display: flex;
  justify-content: space-between;
  width: 199px;
}

.cards .image img {
  transition: 0.5s;
  object-fit: cover;
}

.cards .image img:hover {
  transform: scale(1.05);
}

input {
  display: none;
}


#s1:checked ~ .fon__content #slide4,
#s2:checked ~ .fon__content #slide5,
#s3:checked ~ .fon__content #slide1,
#s4:checked ~ .fon__content #slide2,
#s5:checked ~ .fon__content #slide3 {

  transform: translate3d(-120%, -50%, -220px);
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);
}

#s1:checked ~ .fon__content #slide5,
#s2:checked ~ .fon__content #slide1,
#s3:checked ~ .fon__content #slide2,
#s4:checked ~ .fon__content #slide3,
#s5:checked ~ .fon__content #slide4 {

  transform: translate3d(-60%, -25%, -120px);
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);
}


#s1:checked ~ .fon__content #slide1,
#s2:checked ~ .fon__content #slide2,
#s3:checked ~ .fon__content #slide3,
#s4:checked ~ .fon__content #slide4,
#s5:checked ~ .fon__content #slide5 {

  transform: translate3d(0, 0, 0);
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);
}

#s1:checked ~ .fon__content #slide2,
#s2:checked ~ .fon__content #slide3,
#s3:checked ~ .fon__content #slide4,
#s4:checked ~ .fon__content #slide5,
#s5:checked ~ .fon__content #slide1 {

  transform: translate3d(60%, -25%, -120px);
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);

}

#s1:checked ~ .fon__content #slide3,
#s2:checked ~ .fon__content #slide4,
#s3:checked ~ .fon__content #slide5,
#s4:checked ~ .fon__content #slide1,
#s5:checked ~ .fon__content #slide2 {

  transform: translate3d(120%, -50%, -220px);
  box-shadow: 0 15px 35px 0 rgba(0, 0, 0, 45%);

}

#s1:checked ~ .fon__content {
  background: linear-gradient(180deg, #7F0DB4 0%, #FF7474 100%);
}

#s2:checked ~ .fon__content {
  background: linear-gradient(180deg, #700202 0%, #D1167B 100%);
}

#s3:checked ~ .fon__content {

  background: linear-gradient(180deg, #022770 0%, #6AFAFA 100%);
}

#s5:checked ~ .fon__content {
  background: linear-gradient(180deg, #FF49AB 0.01%, rgba(232, 212, 34, 0.66) 140.82%);
}

#s4:checked ~ .fon__content {

  background: linear-gradient(179.76deg, #FF0000 -27.19%, rgba(4, 35, 195, 0.77) 134.42%);

}

#s3:checked ~ .actors_cards #miles_slide {
  display: block;
  transform: translate3d(500px, 0, 0);

}
</style>