export const StepArrow = () => (
  <div className="flex justify-center items-center">
    {/* スマホでは下向き矢印 */}
    <div className="md:hidden">
      <div className="w-0 h-0 border-l-10 border-r-10 border-t-20 border-l-transparent border-r-transparent border-t-primary-600"></div>
    </div>
    {/* タブレット以上では右向き矢印 */}
    <div className="hidden md:block">
      <div className="w-0 h-0 border-t-10 border-b-10 border-l-20 border-t-transparent border-b-transparent border-l-primary-600"></div>
    </div>
  </div>
);
