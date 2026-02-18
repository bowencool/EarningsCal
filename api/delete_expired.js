// 用于 CLI 调用自动删除过期数据文件
import { deleteExpiredDataFiles } from './automation.js';

const baseDir = process.argv[2] || './storedData';
const today = new Date().toISOString().split('T')[0];

deleteExpiredDataFiles(baseDir, today);
console.log('Expired data files deleted.');
