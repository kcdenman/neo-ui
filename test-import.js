// Test importing the installed package
try {
  console.log('Testing @neo-ui/icons package import...\n');
  
  // Test main exports
  const mainPackage = await import('@neo-ui/icons');
  console.log('✅ Main package imported successfully');
  console.log('Available icons:', Object.keys(mainPackage).filter(key => key !== 'iconNames' && key !== 'getIconByName'));
  console.log('Icon names:', mainPackage.iconNames);
  console.log('');
  
  // Test React components
  const reactPackage = await import('@neo-ui/icons/react');
  console.log('✅ React package imported successfully');
  console.log('Available React components:', Object.keys(reactPackage).filter(key => key !== 'iconNames' && key !== 'iconComponents' && key !== 'Icon'));
  console.log('');
  
  // Test Vue components
  const vuePackage = await import('@neo-ui/icons/vue');
  console.log('✅ Vue package imported successfully');
  console.log('Available Vue components:', Object.keys(vuePackage).filter(key => key !== 'iconNames' && key !== 'iconComponents' && key !== 'Icon'));
  console.log('');
  
  // Test individual icon import
  const { BinaryCode, CodeAgent } = mainPackage;
  console.log('✅ Individual icons imported successfully');
  console.log('BinaryCode type:', typeof BinaryCode);
  console.log('CodeAgent type:', typeof CodeAgent);
  console.log('');
  
  console.log('🎉 All import tests passed! The package is ready for publishing.');
  
} catch (error) {
  console.error('❌ Import test failed:', error.message);
  process.exit(1);
} 