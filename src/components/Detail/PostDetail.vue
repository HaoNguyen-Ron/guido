<script setup lang="ts">
const tour = {
  title: ' Cần tuyển HDV',
  description: ' Chúng tôi đang cần HDV cho tour Đà Nẵng - Hội An - Huế cho đoàn gồm 5 khách Úc và 3 khách Đài Loan',
  destinations: [
    {
      id: 0,
      name: 'Đà Nẵng',
    },
    {
      id: 1,
      name: 'Hội An',
    },
    {
      id: 2,
      name: 'Huế',
    },
  ],
  pay_load: 300,
  requirements: [
    {
      id: 0,
      key: 'language',
      value: 'Tiếng Anh',
    },
    {
      id: 1,
      key: 'language',
      value: 'Tiếng Trung',
    },
    {
      id: 2,
      key: 'experience',
      value: 12, // MONTH
    },
  ],
  maximum_cv: 20,
  partner_attributes: [
    {
      id: 0,
      key: 'phone number',
      status: 'verified',
    },
    {
      id: 1,
      key: 'address',
      status: 'verified',
    },
    {
      id: 2,
      key: 'payment type',
      status: 'unverified',
    },
  ],

}
function handlePayLoad(payLoad: number) {
  return `${payLoad}.000 VND`
}

function getLabel(attribute: {
  id: number
  key: string
  value: string | number
}) {
  switch (attribute.key) {
    case 'experience':

      return `${attribute.value / 12} năm kinh nghiệm`

    default:
      return attribute.value
  }
}
</script>

<template>
  <div :class="$style.post__detail__wrapper">
    <div :class="$style.post__detail__header">
      <h2 :class="$style['post__detail__header--title']">
        {{ tour.title }}
      </h2>

      <p :class="$style['post__detail__header--time']" class="p-grey">
        Đã đăng 1 giờ trước
      </p>

      <div :class="$style['post__detail__header--descriptions']">
        <div
          v-for="destination in tour.destinations"
          :key="`destination-${destination.id}`"
          :class="$style.description__item"
        >
          <div :class="$style.description__icon">
            <i class="fa-solid fa-location-dot" />
          </div>

          <div :class="$style.description__content">
            {{ destination.name }}
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.post__detail__body">
      <p :class="$style['post__detail__body--title']">
        {{ tour.description }}
      </p>

      <div :class="$style['post__detail__body--descriptions']">
        <div :class="$style.description__item">
          <div :class="$style.description__icon">
            <i class="fa-solid fa-money-bill" />
          </div>

          <div :class="$style.description__content">
            <div :class="$style['description__content--info']">
              {{ handlePayLoad(tour.pay_load) }} / ngày
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
          <div
            v-for="requirement in tour.requirements"
            :key="requirement.id"
            :class="$style.badge"
          >
            {{ getLabel(requirement) }}
          </div>
        </div>
      </div>

      <div :class="$style['post__detail__body--activities']">
        <div :class="$style.activity__item">
          <div :class="$style.activity__key">
            Tổng số ứng tuyển hiện tại:
          </div>

          <div :class="$style.activity__value">
            2 trên {{ tour.maximum_cv }}
          </div>
        </div>
      </div>

      <div :class="$style['post__detail__body--verifications']">
        <h2 :class="$style.verifications__title">
          Thông tin về nhà tuyển dụng
        </h2>

        <div :class="$style.verifications__content">
          <div
            v-for="attribute in tour.partner_attributes"
            :key="attribute.id"
            :class="$style.verifications__item"
          >
            <i v-if="attribute.status === 'verified'" class="fa-solid fa-square-check" style="color: green;" />
            <i v-else class="fa-solid fa-circle-xmark" style="color: red;" />

            <p>{{ attribute.key }} {{ attribute.status }}</p>
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.post__detail__footer">
      <button :class="[$style.post__detail__btn, $style['post__detail__btn--primary']]">
        Nộp đơn
      </button>

      <button :class="[$style.post__detail__btn, $style['post__detail__btn--outline']]">
        Lưu bài viết
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.post__detail__wrapper {
  background-color: white;
  padding: 2rem 1rem;

  .post__detail__header {
    padding: 2rem 0;
    border-bottom: 0.1rem solid var(--color-primary-lighter);

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
        margin-bottom: 1rem;

        &:last-child {
          margin-bottom: 0;
        }

        .description__content {
          font-weight: 600;
        }

        .description__icon {
          margin-right: 1rem;
          color: var(--color-primary)
        }
      }
    }
  }

  .post__detail__body {

    &--title {
      padding: 2rem 0;
      font-size: 1.5rem;
      line-height: 3rem;
      border-bottom: .1rem solid var(--color-primary-lighter);
    }

    &--descriptions {
      padding: 2rem 0;
      border-bottom: .1rem solid var(--color-primary-lighter);

      .description__item {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        .description__icon {
          margin-right: 1rem;
          color: green
        }

        .description__content {
          &--info {
            margin-bottom: 1rem;
          }

          &--note {
            font-size: 1.3rem;
            color: var(--color-gray)
          }
        }
      }
    }

    &--requirements {
      padding: 2rem 0;
      border-bottom: 0.1rem solid var(--color-primary-lighter);

      .requirement__title {
        margin-bottom: 1rem;
      }

      .requirement__badges {
        display: flex;
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
      border-bottom: .1rem solid var(--color-primary-lighter);

      .activity__item {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .activity__value {
          font-weight: 600;
        }
      }
    }

    &--verifications {
      padding: 2rem 0;
      border-bottom: .1rem solid var(--color-primary-lighter);

      .verifications__title {
        margin-bottom: 2rem;
      }

      .verifications__content {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        .verifications__item {
          display: flex;
          gap: 1rem;

          i.fa-square-check {
            background-color: green;
          }

          i.fa-circle-xmark {
            color: red;
          }
        }
      }
    }
  }

  .post__detail__footer {
    background-color: white;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 2rem 0;
    width: 100%;

    .post__detail__btn {
      font-size: 2rem;
      padding: 0.5rem 1rem;
      border-radius: 9999px;
      outline: none;
      cursor: pointer;
      transition-duration: 300ms;

      &:hover {
        color: white;
        background-color: var(--color-primary-dark);
      }

      &:active {
        color: white;
        background-color: var(--color-primary-darker);
      }

      &.post__detail__btn--primary {
        border: none;
        background-color: var(--color-primary);
        color: white;
      }

      &.post__detail__btn--outline {
        border: 1px solid var(--color-primary);
        color: var(--color-primary);
        background-color: white;
      }
    }
  }
}
</style>
