<template>
<div>
  <header class="cube-bar">
  <h1>
    您像哪位历史人物
  </h1>
  </header>
  <div class="image">
    <cube-upload
    ref="upload"
    v-model="files"
    :action="action"
    @files-added="addedHandler"
    @file-error="errHandler">
    <div class="clear-fix">
      <cube-upload-file v-for="(file, i) in files" :file="file" :key="i" class="upload-file-image"></cube-upload-file>
      <cube-upload-btn :multiple="false">
        <div>
          <i>＋</i>
          <p>请点击上传头像</p>
        </div>
      </cube-upload-btn>
    </div>
  </cube-upload>
  </div>
  <cube-button @click="showDialog">查看结果</cube-button>

  <!-- <cube-upload
  ref="upload"
  :action="action"
  :simultaneous-uploads="1"
  :process-file="processFile"
  @file-submitted="fileSubmitted" />
  <cube-button @click="showDialog">上传头像</cube-button> -->
</div>
</template>

<script>
  export default {
    data() {
      return {
      action: '//jsonplaceholder.typicode.com/photos/',
        files: []
      }
    },
    methods: {
      showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      },
      addedHandler() {
        const file = this.files[0]
        file && this.$refs.upload.removeFile(file)
      },
      errHandler() {
        // const msg = file.response.message
        this.$createToast({
          type: 'warn',
          txt: 'Upload fail',
          time: 1000
        }).show()
      }
    }
  }
</script>
<style>
  .image {
    margin: 1rem auto;
    height: 8rem;
    width: 8rem;
    /* border: 1px dashed #ccc; */
  }
  .image img {
    width: 100%;
    height: 100%;
  }
  .cube-bar {
    right: 0;
    left: 0;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background-color: #edf0f4;
    box-shadow: 0 2px 1px #e9eaea;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .cube-upload .cube-upload-file, .cube-upload-btn {
    margin: 0;
    height: 200px
  }

  .upload-file-image > .cube-upload-file-def {
    width: 100%;
    height: 100%;
  }

  .cube-upload-file{
    margin: 0
  }
    
  .cube-upload-file + .cube-upload-btn{
    margin-top: -200px;
    opacity: 0;
  }

  .cube-upload-file-def .cubeic-wrong{
    display: none
  }

  .cube-upload-btn{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cube-upload-btn > div{
      text-align: center;
  }

  i{
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    font-size: 32px;
    line-height: 1;
    font-style: normal;
    color: #fff;
    background-color: #333;
    border-radius: 50%;
  }
      
</style>