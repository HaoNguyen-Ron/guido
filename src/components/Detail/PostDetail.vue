<script setup lang="ts">
const tour = {
  title: ' Cần tuyển HDV',
  description: ' Chúng tôi đang cần HDV cho tour Đà Nẵng - Hội An - Huế cho đoàn gồm 5 khách Úc và 3 khách Đài Loan',
  maximum_cv: 20,
  price: 300,
  total_destinations: [
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
  required_skill: [
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

      return `${attribute.value as number / 12} năm kinh nghiệm`

    default:
      return attribute.value
  }
}
</script>

<template>
  <div :class="$style.postDetailWrapper">
    <div :class="[$style.postDetailHeader, $style.postDetailBorderBottom]">
      <h2 :class="$style.postDetailHeading">
        {{ tour.title }}
      </h2>

      <p :class="$style.postDetailNote" class="mb-1">
        Đã đăng 1 giờ trước
      </p>

      <div :class="$style.postDetailList">
        <span
          v-for="destination in tour.total_destinations" :key="`destination-${destination.id}`"
          :class="$style.postDetailItem"
        >
          <div :class="$style.postDetailIconBlue">
            <i class="fa-solid fa-location-dot" />
          </div>

          <div :class="$style.postDetailContent">
            {{ destination.name }}
          </div>
        </span>
      </div>
    </div>

    <div :class="$style.postDetailBody">
      <p :class="[$style.postDetailTitle, $style.postDetailBorderBottom]">
        {{ tour.description }}
      </p>

      <div :class="$style.postDetailList">
        <div :class="[$style.postDetailItem, $style.postDetailBorderBottom]">
          <div :class="$style.postDetailIconGreen">
            <i class="fa-solid fa-money-bill" />
          </div>

          <div :class="$style.postDetailContent">
            <div :class="$style.postDetailTitle" class="mb-1">
              {{ handlePayLoad(tour.price) }} / ngày
            </div>

            <div :class="$style.postDetailNote">
              Tiền công trên một ngày
            </div>
          </div>
        </div>
      </div>

      <div :class="[$style.postDetailRequirement, $style.postDetailBorderBottom]">
        <h2 :class="$style.postDetailHeading">
          Yêu cầu về trình độ
        </h2>

        <div :class="$style.postDetailBagdeList">
          <span v-for="skill in tour.required_skill" :key="skill.id" :class="$style.postDetailBagde">
            {{ getLabel(skill) }}
          </span>
        </div>
      </div>

      <div :class="[$style.postDetailActivities, $style.postDetailBorderBottom]">
        <div :class="$style.postDetailActivityList">
          <div :class="$style.postDetailTitle">
            Tổng số ứng tuyển hiện tại:
          </div>

          <div :class="$style.postDetailContent">
            2 trên {{ tour.maximum_cv }}
          </div>
        </div>
      </div>

      <div :class="$style.postDetailVerification">
        <h2 :class="$style.postDetailHeading">
          Thông tin về nhà tuyển dụng
        </h2>

        <div :class="$style.postDetailList">
          <div v-for="attribute in tour.partner_attributes" :key="attribute.id" :class="$style.postDetailItem">
            <i v-if="attribute.status === 'verified'" class="fa-solid fa-square-check " :class="$style.postDetailIconGreen" />

            <i v-else class="fa-solid fa-circle-xmark" :class="$style.postDetailIconRed" />

            <p>{{ attribute.key }} {{ attribute.status }}</p>
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.postDetailFooter">
      <button :class="[$style.postDetailBtn, $style.postDetailBtnPrimary]">
        Nộp đơn
      </button>

      <button :class="[$style.postDetailBtn, $style.postDetailBtnOutline]">
        Lưu bài viết
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.postDetailWrapper {
  background-color: white;
  padding: 2rem 1rem;

}

.postDetailHeader {
  padding: 2rem 0;
  border-bottom: 0.1rem solid var(--color-primary-lighter);
}

.postDetailFooter {
  background-color: white;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  padding: 2rem 0;
  width: 100%;
}

.postDetailList {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.postDetailItem {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.postDetailRequirement {
  padding: 2rem 0;
}

.postDetailBagdeList {
  display: flex;
  gap: 1rem;
}

.postDetailBagde {
  display: inline-block;
  background-color: var(--color-gray-light);
  color: var(--color-gray-darker);
  padding: 1rem 1rem;
  border-radius: 2rem;
}

.postDetailActivities {
  padding: 2rem 0;
}

.postDetailActivityList {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.postDetailVerification {
  padding: 2rem 0;
}

.postDetailHeading {
  font-weight: 600;
  font-size: 1.8rem;
  margin-bottom: 2rem;
}

.postDetailContent {
  font-weight: 600;
}

.postDetailTitle {
  font-size: 1.5rem;
  line-height: 2.5rem;
}

.postDetailNote {
  color: var(--color-gray);
}

.postDetailIconBlue {
  color: var(--color-primary-darker);
}

.postDetailIconGreen {
  color: green;
}

.postDetailIconRed {
  color: red;
}

.postDetailBorderBottom {
  padding: 2rem 0;
  border-bottom: .1rem solid var(--color-primary-lighter);
}

.postDetailBtn {
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

  }
  .postDetailBtnPrimary {
    border: none;
    background-color: var(--color-primary);
    color: white;
  }

  .postDetailBtnOutline {
    border: 1px solid var(--color-primary);
    color: var(--color-primary);
    background-color: white;
  }
</style>
