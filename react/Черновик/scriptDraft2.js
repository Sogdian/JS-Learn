export const Sidebar = () => {
  const [declarationsPageInitStyle, setDeclarationsPageInitStyle] = useState(() => {
    const savedState = localStorage.getItem("declarationsPageInitStyle");
    return savedState !== null ? JSON.parse(savedState) : true;
  });

  function setTrueDeclarationsPageInitStyle() {
    setDeclarationsPageInitStyle(true);
  }

  useEffect(() => {
    localStorage.setItem("declarationsPageInitStyle", JSON.stringify(declarationsPageInitStyle));
  }, [declarationsPageInitStyle]);

    return (
              <SideMenu.Item
                className={cn(styles.sideMenuItem, declarationsPageInitStyle && styles.background)}
                onClick={() => {
                  history.push(menuPathnames.ReportingPackagesPageDefault);
                }}
              />

            <SideMenu.Item
              className={styles.sideMenuItem}
              onClick={() => {
                history.push(menuPathnames.PrimaryRegisterSectionPage);
                setDeclarationsPageInitStyle(false);
              }}
            />
  );
};
