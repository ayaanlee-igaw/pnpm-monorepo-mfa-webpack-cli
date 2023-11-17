<template>
  <h2>Dialog / Message Box</h2>

  <div>
    <el-button
      text
      @click="dialogVisible1 = true">
      click to open the Dialog
    </el-button>
    <el-dialog
      v-model="dialogVisible1"
      title="Tips"
      width="30%"
      :before-close="handleClose1">
      <span>This is a message</span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible1 = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="dialogVisible1 = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>

  <div>
    <el-button
      text
      @click="centerDialogVisible = true">
      Click to open the Dialog
    </el-button>

    <el-dialog
      v-model="centerDialogVisible"
      title="Warning"
      width="30%"
      center
      :before-close="handleClose2">
      <span>
        It should be noted that the content will not be aligned in center by
        default
      </span>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">Cancel</el-button>
          <el-button
            type="primary"
            @click="centerDialogVisible = false">
            Confirm
          </el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { ElMessageBox } from 'element-plus';

const dialogVisible1 = ref(false);
const centerDialogVisible = ref(false);

const handleClose1 = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
    center: true,
  });
};
const handleClose2 = () => {
  ElMessageBox.alert('This is a message', 'Title', {
    confirmButtonText: 'OK',
  });
};
</script>

<style scoped></style>
