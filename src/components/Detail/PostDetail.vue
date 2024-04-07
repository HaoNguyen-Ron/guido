<script setup lang="ts">
</script>

<template>
  <div :class="$style.postDetailWrapper">
    <div :class="$style.postDetailHeader">
      <h2 :class="$style.postDetailHeading">
        Cần tuyển HDV
      </h2>

      <p :class="$style.postDetailTime">
        Đã đăng 1 giờ trước
      </p>

      <div :class="$style.postDetailNote">
        <div :class="$style.postDetailNoteItem">
          <div :class="$style.postDetailIcon">
            Icon
          </div>

          <div :class="$style.postDetailContent">
            Đà Nẵng, Hội An
          </div>
        </div>
      </div>
    </div>

    <div :class="$style.postDetailBody">
      <p :class="$style.postDetailTitle">
        Chúng tôi đang cần HDV cho tour Đà Nẵng - Hội An
      </p>

      <div :class="$style.postDetailDesc">
        <div :class="$style.postDetailDescICon">
          Icon
        </div>

        <div :class="$style.postDetailInfo">
          <div :class="$style.postDetailInfoContent">
            300.000 VND / ngày
          </div>
        </div>
      </div>

      <div :class="$style.postDetailSkill">
        <h2 :class="$style.postDetailHeading">
          Yêu cầu về trình độ
        </h2>
        <div :class="$style.postDetailBadge">
          Tiếng Anh
        </div>
      </div>

      <div :class="$style.postDetailProposal">
        <div :class="$style.postDetailProposalCriteria">
          <div :class="$style.postDetailProposalKey">
            Tổng số ứng tuyển:
          </div>

          <div :class="$style.postDetailProposalValue">
            20 to 50
          </div>
        </div>
      </div>

      <div :class="$style.postDetailVerification">
        <div :class="$style.postDetailHeading">
          Thông tin về nhà tuyển dụng
        </div>

        <div :class="$style.postDetailVerificationItem">
          Icon
          <span>Phone number Verified</span>
        </div>
      </div>
    </div>

    <div :class="$style.postDetailFooter">
      <button :class="[$style.postDetailBtn, $style.postDetailBtnPrimary]">
        Nộp đơn
      </button>

      <button :class="[$style.postDetailBtn, $style.postDetailBtnPrimary]">
        Lưu bài viết
      </button>
    </div>
  </div>
</template>

<style lang="scss" module>
.postDetailWrapper {
    padding: 1.5rem 1rem;
}
</style>
