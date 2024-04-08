<script setup lang="ts">
</script>

<template>
  <div :class="$style.post__detail__wrapper">
    <div :class="$style.post__detail__header">
      <h2 :class="$style['post__detail__header--title']">
        Cần tuyển HDV
      </h2>

      <p :class="$style['post__detail__header--time']" class="p-grey">
        Đã đăng 1 giờ trước
      </p>

      <div :class="$style['post__detail__header--descriptions']">
        <div :class="$style.description__item">
          <div :class="$style.description__icon">
            <i class="ti ti-location-pin" />
          </div>

          <div :class="$style.description__content">
            Đà Nẵng, Hội An
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.post__detail__body">
      <p :class="$style['post__detail__body--title']">
        Chúng tôi đang cần HDV cho tour Đà Nẵng - Hội An
      </p>

      <div :class="$style['post__detail__body--descriptions']">
        <div :class="$style.description__item">
          <div :class="$style.description__icon">
            <i class="ti ti-money" />
          </div>

          <div :class="$style.description__content">
            <div :class="$style['description__content--info']">
              300.000 VND / ngày
            </div>

            <div :class="$style['description__content--note']">
              Tiền công trên một ngày
            </div>
          </div>
        </div>
      </div>

      <div :class="$style['post__detail__body--requirements']">
        <h2 :class="$style.requirement__title">
          Yêu cầu về trình độ
        </h2>
        <div :class="$style.requirement__badges">
          <div :class="$style.badge">
            Tiếng Anh
          </div>

          <div :class="$style.badge">
            Tiếng Trung
          </div>
        </div>
      </div>

      <div :class="$style['post__detail__body--activities']">
        <div :class="$style.activity__item">
          <div :class="$style.activity__key">
            Tổng số ứng tuyển:
          </div>

          <div :class="$style.activity__value">
            20 to 50
          </div>
        </div>
      </div>

      <div :class="$style['post__detail__body--verifications']">
        <h2 :class="$style.verifications__title">
          Thông tin về nhà tuyển dụng
        </h2>

        <div :class="$style.verifications__content">
          <div :class="$style.verifications__item">
            <i class="ti ti-check-box" />

            <p>Phone number Verified</p>
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.post__detail__footer">
      <button :class="[$style.post__detail__btn, $style['post__detail__btn--primary']]">
        Nộp đơn
      </button>

      <button :class="[$style.postDetailBtn, $style['post__detail__btn--outline']]">
        Lưu bài viết
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.post__detail__wrapper {
  padding: 1.5rem 1rem;
  background-color: white;

  .post__detail__header {
    padding: 2rem 0;
    border-bottom: 0.1rem solid black;

    &--title {
      margin-bottom: 2rem;
    }

    &--time {
      margin-bottom: 1rem;
    }

    &--descriptions {
      .description__item {
        display: flex;
        align-items: start;

        .description__icon {
          margin-right: 1rem;
        }
      }
    }
  }

  .post__detail__body {

    &--title {
      padding: 2rem 0;
      border-bottom: .1rem solid black;
    }

    &--descriptions {
      padding: 2rem 0;
      border-bottom: .1rem solid black;

      .description__item {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .description__icon {
          margin-right: 1rem;
        }

        .description__content {
          &--note {
            font-size: 1.3rem;
            color: var(--color-gray)
          }
        }
      }
    }

    &--requirements {
      padding: 2rem 0;
      border-bottom: 0.1rem solid black;

      .requirement__title {
          margin-bottom: 1rem;
      }

      .requirement__badges {
        display: flex;
        align-items: center;
        gap: 1rem;

        .badge {
          display: inline-block;
          background-color: var(--color-gray-light);
          color: var(--color-gray-darker);
          padding: 1rem 1rem;
          border-radius: 2rem;
        }
      }
    }

    &--activities {
      padding: 2rem 0;
      border-bottom: 0.1rem solid black;

      .activity__item {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }

    &--verifications {
      padding: 2rem 0;
      
      .verifications__title{
        margin-bottom: 2rem;
      }

      .verifications__content {

        .verifications__item {
          display: flex;
          gap: 1rem;
            i {
              color: green
            }
        }
      }
    }
  }

  .post__detail__footer {
    position: fixed;
    border-top: .1rem solid black;
    width: 100%;
    background-color: white;
  }
}
</style>
